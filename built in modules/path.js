/**
 * this module help us to intract with file path
 */

const path = require("node:path");
const os = require("node:os");

/**
 * path.sep
 * get system separator
 */
// console.log(path.sep);

/**
 * path.join()
 * just concat the argument with specific separator
 */
const test = path.join("/content", "sub folder", "test.txt");

// console.log(test);

/**
 * path.basename()
 * get the base file name of the link
 * ex: desh/bd/index.html
 *
 * the basename will be index.html
 */
const base = path.basename(test);

// console.log(base);

/**
 * path.resolve()
 *
 * give absolute path with the addded argument
 *
 * ex: path.resolve('folder', 'file.txt')
 * result: C:\Users\User\OneDrive\Desktop\Node Tutorial\.....folder\file.txt
 *
 * link to this file + the arguments
 */

const absolute = path.resolve(__dirname, "content", "sub folder", "test.txt");
const abs = path.resolve("folder", "file.txt");

/**
 * path.join()
 *
 * returns concate the arguments with specific separator
 * ex: path.join('/folder', 'file.txt')
 *
 * result: \folder\file.txt
 */

const pathJoin = path.join(__dirname, "/content", "sub folder", "test.txt");
const join2 = path.join("folder", "file.txt");
