const os = require("node:os");

// console.log(os.arch());

// console.log(os.cpus()); // return array od object containing information about each logical CPU core

/**
 * os.totalmem()
 * return total amount of system memory in bytes
 */

// console.log(os.totalmem());

// bytes to megabytes converts
//  1 MB = 1024 * 1024 bytes

function bytesToMB(bt) {
  return bt / (1024 * 1024);
}

// console.log(bytesToMB(os.totalmem()));

/**
 * os.freemem()
 * return amount of free system memory in bytes
 */

// console.log(bytesToMB(os.freemem()));

/**
 * os.platform()
 * return the os platform
 */

// console.log(os.platform());

/**
 * os.release()
 * return the release version of the operating system
 */

// console.log(os.release());

/**
 * os.type()
 * return os name
 */

// console.log(os.type());

/**
 * os.uptime()
 * returns the system uptime in seconds
 */

// console.log(os.uptime() / 3600); // this will convert into hours

/**
 * Methods
 */

/**
 * os.userInfo()
 * return information about the current user username, userID, home directory
 */

// console.log(os.userInfo());

/**
 * os.networkInterfaces()
 * return an object containing about network interfaces
 */

// console.log(os.networkInterfaces());

/**
 * os.hostname()
 * return the host name of the operating system
 */

// console.log(os.hostname());

/**
 * os.tmpdir()
 * returns directory for temporary file
 */

// console.log(os.tmpdir());

/**
 * os.endianness
 * return the endianness of the cpu ( BE for big-endian, LE for little-endian)
 */

// console.log(os.endianness());

/**
 * os.constants
 * an object containing various constants related to the operation system
 * eg: error codes
 */

// console.log(os.constants);

// ==============================================================

const user = os.userInfo;

// console.log(os.uptime());

const currentOs = {
  name: os.type(),
  version: os.release(),
  running: os.uptime(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostName: os.hostname(),
};

console.log(currentOs);
