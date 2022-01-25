import { Chalk } from "chalk";
const chalk = new Chalk({ level: 3 });
import chalkTemplate from "chalk-template";
import chokidar from "chokidar";
import wrapAnsi from "wrap-ansi";
import fs from "fs";
import { convertToChalk } from "./convertToChalk.js";

const chalkTemplateFn = (str) => {
  const strs = [str];
  strs.raw = [str];
  return chalkTemplate(strs);
};

function showFile(path) {
  let data = fs.readFileSync(path, { encoding: "utf8" });
  let lines = data.split("\n");
  for (let line of lines) {
    if (!line.includes("<c")) {
      console.log(line);
      continue;
    }
    let template = convertToChalk(line);
    console.log(wrapAnsi(chalkTemplateFn(template), 80));
  }
}
console.log("Watching for filechanges in `./library` directory.");
chokidar.watch("./library/").on("all", (event, path) => {
  if (event !== "change") return;
  showFile(path);
});
