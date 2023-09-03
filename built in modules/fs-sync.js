// two way to work with FS module
// one is blocking (synco) two is non blocking (async)
//

/**
 * sync
 */

const { readFileSync, writeFileSync } = require("node:fs");

// raed file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first);
// console.log(second);

// write file

// writing sync way

// writeFileSync(
//   "./content/result-sync.txt",
//   `yhoo we are writing this file: ${first} ${second}`
// );

// appending but not re-writing the whole file
writeFileSync(
  "./content/result-sync.txt",
  `we are not re-eriting the file rather we are appending the text: ${first} AND ${second}`,
  { flag: "a" }
);
