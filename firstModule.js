// in CommonJS every file is a module
// Modules = areencapsulated code

// import from utiltity
// const { sayName, hook } = require("./uti");
const uti = require("./uti");

// import from name
// const { john, peter } = require("./name");
const name = require("./name");

/**
 * uti is an object
 * uti = {hook, sayName}
 *
 * name is also an export object
 * name = {john, peter}
 */

/**
 * now we will combine
 * we got sayName fn from uti
 * and some name from name
 */

// console.log(uti);
// console.log(uti.sayName());

require("./mindGrenade");
