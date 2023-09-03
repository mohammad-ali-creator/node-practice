exports.sayName = (nam) => {
  return `Hi there ${nam}. How you doing?`;
};

exports.hook = function (h) {
  return `Hello there ${h}`;
};

/**
 * here we can exports the needed functionality by direct
 * ex: exports.functionName = () => {
 * }
 *
 * exports.functionName = function() {
 * }
 *
 * or by using full module form
 * ex: mopdule.exports = {functionName}
 */
