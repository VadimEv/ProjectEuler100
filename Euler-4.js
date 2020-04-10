/* Finds largest palindrome product of N-digit numbers, ex 99*91=9009 */
/* First function needed is to check if number is palindrome, it's adapted sofPalindrome from my JsChucnks repo */
function isPalindrome (num) {
  const numStr = num.toString()
  // do we need Zeros? only Heroes
  if (numStr === '0') { return false }
  if (numStr.split('').reverse().join('') === numStr) {
    return true
  } else {
    return false
  }
}
/* Second function return largest N digit number, super simple */
function constructNum (num) {
  const str = '9'
  return parseInt(str.padEnd(num, str), 10)
}
/* not nearly the optimal way, revisiting it later */
function matrix (rows, cols) {
  var arr = []
  // Creates all lines:
  for (var i = 0; i < rows; i++) {
    // Creates an empty line
    arr.push([])
    // Adds cols to the empty line:
    arr[i].push(new Array(cols))
    for (var j = 0; j < cols; j++) {
      // Initializes:
      arr[i][j] = i * j
    }
  }
  return arr
}
function largestPalindromeProduct (num) {
  // construct the dimension
  const dim = constructNum(num)
  // since array of arrays is constructed, aka matrix, aka 2D table we need to take 0 row into account thus + 1
  const table = matrix(dim + 1, dim + 1)
  // Faltter 2D array into 1D
  const flattened = table.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue), [])
  // remove all zero and non palidrome numbers
  const pals = flattened.filter(isPalindrome)
  return Math.max.apply(Math, pals)
}

largestPalindromeProduct(2)
