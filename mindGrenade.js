const num1 = 5;
const num2 = 10;

function addMath() {
  console.log(`the sum is ${num1 + num2}`);
}

// addMath();

/**
 * here we aren't exporting anything.
 *
 * if we require this file into another file then we will see something amazing
 * not any element of this file are available in the required file
 * but
 * if we involke any function here
 * ex: addMath()
 * then required file will show the reasult of the invloked function.
 *
 */
