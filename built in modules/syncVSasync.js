const { log } = require("console");
const { readFileSync, writeFileSync } = require("node:fs");

log("start the task");
const file1 = readFileSync("./content/first.txt", "utf8");

writeFileSync("./content/file1.txt", `Here are some text: ${file1}`);
log("compeleted the task");
log("start next task");

// ==============================

// nice now code the same with async approach

const { readFile, writeFile } = require("node:fs");

/**
 * the task is wer will read a file and then
 * write a file with the text we've got from the reading
 */

log("start the task");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    log(err);
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      log(err);
    }
    const second = result;

    writeFile(
      "./content/ffgg.txt",
      `here is some txt: ${first} AND ${second}`,
      (err, result) => {
        if (err) {
          log(err);
        }
        log("compeleted the task");
      }
    );
  });
});

log("new task started!");
