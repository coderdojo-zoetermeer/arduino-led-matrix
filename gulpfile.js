import { series, watch } from "gulp";
import vfs from "vinyl-fs";
import MarkdownIt from "markdown-it";
import { readFile, writeFile } from "node:fs/promises";
import meta from "markdown-it-meta";
import Handlebars from "handlebars";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import python from "highlight.js/lib/languages/python";
import path from "path";
import { Writable } from "streamx";
import logger from "gulplog";
import markdownItAttrs from "markdown-it-attrs";
import { snippet } from "@mdit/plugin-snippet";
import { icon, fontawesomeRender } from "@mdit/plugin-icon";
import { imgSize } from "@mdit/plugin-img-size";
import { uml } from "@mdit/plugin-uml";
import { mark } from "@mdit/plugin-mark";
import { container } from "@mdit/plugin-container";
import { demo } from "@mdit/plugin-demo";
import { stylize } from "@mdit/plugin-stylize";
import { include } from "@mdit/plugin-include";
import { katex } from "@mdit/plugin-katex";

const templateDir = import.meta.dirname + "/templates";
const cwd = process.cwd();

hljs.registerLanguage("c", cpp);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("ino", cpp);
hljs.registerLanguage("py", python);

const md = MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: false })
          .value;
      } catch (__) {}
    }

    return "";
  },
});
md.use(snippet, {
  currentPath: (env) => env.currentMdFilePath,
});
md.use(include, {
  currentPath: (env) => env.currentMdFilePath,
  deep: true,
});
md.use(meta);
md.use(katex);
md.use(imgSize);
md.use(markdownItAttrs);
md.use(icon, {
  render: fontawesomeRender,
});
md.use(mark);
md.use(container, { name: "challenge" });
md.use(container, { name: "codeblock" });
md.use(container, { name: "read" });
md.use(container, { name: "build" });
md.use(container, { name: "program" });
md.use(demo);
md.use(stylize, {
  config: [
    {
      matcher: "pagebreak",
      replacer: ({ tag }) => {
        if (tag === "em")
          return {
            tag: "div",
            attrs: { class: "pagebreak" },
            content: "",
          };
      },
    },
    {
      matcher: "clear-float",
      replacer: ({ tag }) => {
        if (tag === "em")
          return {
            tag: "div",
            attrs: { class: "clear-float" },
            content: "",
          };
      },
    },
  ],
});

const proxy = (tokens, idx, options, env, self) =>
  self.renderToken(tokens, idx, options);
const defaultHrRenderer = md.renderer.hr || proxy;

md.renderer.rules.hr = function (tokens, idx, options, env, self) {
  if (tokens[idx].markup[0] === "-") {
    tokens[idx].attrJoin("class", "separator-thin");
  } else if (tokens[idx].markup[0] === "_") {
    tokens[idx].attrJoin("class", "separator-hidden");
  } else if (tokens[idx].markup[0] === "*") {
    tokens[idx].attrJoin("class", "separator-fat");
  }

  return defaultHrRenderer(tokens, idx, options, env, self);
};

Handlebars.registerHelper(
  "renderMarkdown",
  function (object, propertyName, defaultValue, options) {
    return md.render(object.toString());
  },
);

function generateAssignment() {
  const writable = new Writable({
    async write(data, cb) {
      try {
        logger.info("compiling " + data.path);

        const result = md.render(data.contents.toString(), {
          currentMdFilePath: data.path,
        });

        const templateName = md.meta.template || "default";
        const template = await readFile(
          `${templateDir}/template-${templateName}.hbs`,
          {
            encoding: "utf8",
          },
        );
        const compiledTemplate = Handlebars.compile(template);

        const output = compiledTemplate({
          content: result,
          meta: md.meta,
          templateAssetFolder: "/templates/assets",
        });

        const pathInfo = path.parse(data.path);
        const targetPath = path.join(pathInfo.dir, pathInfo.name + ".html");
        await writeFile(targetPath, output);

        cb(null, output);
      } catch (e) {
        logger.error(e);
      }
    },
  });

  return writable;
}

export function buildAssignments(cb) {
  const buildAssignmentsTask = vfs
    .src(["opdrachten/**/*.md", "!opdrachten/**/lib/*"])
    .pipe(generateAssignment());

  buildAssignmentsTask.on("finish", () => {
    cb();
  });
}

export function watchTask(cb) {
  const watcher = watch("opdrachten/**/*.md", buildAssignments);
}

export const build = series(buildAssignments);
export const buildWatch = series(build, watchTask);
