import fs from "fs";
import chokidar from "chokidar";
import wrapAnsi from "wrap-ansi";
import { ColorAdaptor }  from "./ColorAdaptor.js";
import { AnsiAdaptor } from "./AnsiAdaptor.js";

const colorAdaptor = new ColorAdaptor();
const ansiAdaptor = new AnsiAdaptor();

console.log("Watching for filechanges in `./library` directory.");
chokidar.watch("./library/").on("all", (event, path) => {
  if (event !== "change") return;
  const input = fs.readFileSync(path, { encoding: "utf8" });
  const withSpans = colorAdaptor.convert(input);
  const withAnsi  = ansiAdaptor.convert(withSpans);
  const result    = wrapAnsi(withAnsi);
  console.log(result);
});