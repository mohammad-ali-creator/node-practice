/**
 * here John want to explain how we can do the same exports thing without using module.exports declearation
 * ex: module.exports = {item, [items]}
 *
 * rather than
 * we can use
 * exports.[objectName] = {item, [items]}
 *
 */

module.exports.person = {
  name: "Kilton",
};
