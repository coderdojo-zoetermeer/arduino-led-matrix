#!/usr/bin/env node

import liveServer from "live-server";
import logger from "gulplog";
import * as gulpfile from "../gulpfile.js";

logger.on("info", (message) => {
  console.log(message);
});

logger.on("error", (message) => {
  console.error(message);
});

gulpfile.buildWatch();

console.log("/templates", import.meta.dirname + "/templates");

liveServer.start({
  port: 8181,
  host: "0.0.0.0",
  root: "./",
  open: false,
  wait: 1000,
  mount: [["/templates", import.meta.dirname + "/../templates"]], // Mount a directory to a route.
  logLevel: 2,
  middleware: [
    function (req, res, next) {
      next();
    },
  ],
});
