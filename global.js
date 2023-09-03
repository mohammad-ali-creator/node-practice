// Globals are the window variable from browser
// we can use Global the way we've used window variable in browser
// window variable means the window of browser, sometimes we call it window object.
// the global object also work like that way.

// ex of globals

/**
 * __dirname    = path to current directory
 * __filename   = file name
 * require      = function to use modules (ConmmonJS)
 * module       = info about current module (file)
 * process      = info info about env where the program is being executed
 *
 */

// console.log(__dirname);

// lets practice some setInterval

setInterval(() => {
  console.log("Hi there");
}, 100);
