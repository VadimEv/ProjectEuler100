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
/* Safe to assume that palindromes lie in upper half and due to symmetry we need only half of those */
function matrix (num) {
  var max = 0
  // Creates all lines:
  for (var i = Math.floor(num * 0.8); i < num + 1; i++) {
    for (var j = i; j < num + 1; j++) {
      // Initializes:
      if (isPalindrome(i * j) && (max < i * j)) {
        max = i * j
      }
    }
  }
  return max
}
function largestPalindromeProduct (num) {
  // construct the dimension
  const dim = constructNum(num)
  // remove all zero and non palidrome numbers
  return matrix(dim)
}

largestPalindromeProduct(2)
