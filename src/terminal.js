const fs = require("fs");
const chokidar = require("chokidar");
const ColorAdaptor = require("./ColorAdaptor.js");
const AnsiAdaptor = require ("./AnsiAdaptor.js");

const colorAdaptor = new ColorAdaptor();
const ansiAdaptor = new AnsiAdaptor();

console.log("Watching for filechanges in `./library` directory.");

chokidar.watch("./library/").on("all", async (event, path) => {
  if (event !== "change") return;

  const { default: wrapAnsi } = await import("wrap-ansi");

  const input = fs.readFileSync(path, { encoding: "utf8" });
  const withSpans = colorAdaptor.convert(input);
  const withAnsi  = await ansiAdaptor.convert(withSpans);
  const result    = wrapAnsi(withAnsi, 80);

  console.log(result);
});