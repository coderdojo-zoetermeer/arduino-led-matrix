#!/usr/bin/env node

import { program } from "commander";
import logger from "gulplog";
import * as gulpfile from "../gulpfile.js";
import fs from "fs";
import Handlebars from "handlebars";

logger.on("info", (message) => {
  console.log(message);
});

logger.on("error", (message) => {
  console.error(message);
});

program
  .name("cdz-gen")
  .description("Generates HTML files for CoderDojo assignments")
  .version("1.0.0");

program
  .command("build")
  .description("Builds the assignments")
  .action(() => {
    gulpfile.build();
  });

program
  .command("server")
  .description(
    "Builds the assignments and watches for changes and rebuilds assignments." +
      " Also starts a local server to serve the generated files.",
  )
  .action(() => {
    gulpfile.server();
  });

program
  .command("gen-assignment")
  .description("Generates a new assignment file")
  .requiredOption("-n, --name <name>", "Name of the assignment")
  .action(async (a, b, c) => {
    const templatePath = `${import.meta.dirname}/../templates/assignment-template.hbs`;
    const outputPath = `${a.name}.md`;

    try {
      const templateContent = await fs.promises.readFile(templatePath, {
        encoding: "utf8",
      });
      const template = Handlebars.compile(templateContent);
      const output = template({ name: a.name });
      await fs.promises.writeFile(outputPath, output);
      console.log(
        `Assignment "${a.name}" generated successfully at ${outputPath}`,
      );
    } catch (e) {
      logger.error(e);
    }
  });

program.parse();
