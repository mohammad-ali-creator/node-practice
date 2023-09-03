// file systerm with async way is very straight froward

const { readFile, writeFile } = require("fs");

// work with async way
// async work with callback function

// raed with async way
/**
 * read function
 * raedFile()
 * 1st arg a file path
 * 2nd arg a decoded system
 * 3rd arg is a callback function
 *  callback function have two arg
 *  one is the error
 *  second is the result (file element we have called)
 */
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
});

// writing the file simple way

// writeFile(
//   "./content/result-async.txt",
//   `hello there this is writing procee over here`,
//   (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(result);
//   }
// );

// write the file same as sync way

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   const first = result;

//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(er);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/some-async.txt",
//       `here we go callback into callback: ${first} AND ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

//  same as sync way
// write the file

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/happy-async.txt",
      `hi there some happy text: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});
