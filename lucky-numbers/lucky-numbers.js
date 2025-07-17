// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // Convert arrays to numbers by joining their digits, then sum
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));
  return num1 + num2;
}


/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const arr = String(value).split('');
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let numberino = null;
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  if (isNaN(Number(input)) || Number(input) == 0) {
    return 'Must be a number besides 0';
  }
  return '';
  
}

