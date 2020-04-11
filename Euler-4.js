/* Finds largest palindrome product of N-digit numbers, ex 99*91=9009 */
/* utilise latest server worker interface to log time */
var performance = window.performance
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
function largestN (num) {
  const str = '9'
  return parseInt(str.padEnd(num, str), 10)
}
/* first assumption any palindrome is dvisible by smallest possible non-trivial palindrome 11
   second assumption, any 1(n)1 squared is palindrome, so lower bound is somewhere above largestN - 1(n)1
   thus we use num * 0.8888888 */
function matrix (num) {
  var max = 0
  for (var i = Math.floor(num * (8 / 9)); i < num + 1; i++) {
    for (var j = i; j < num + 1; j++) {
      if (isPalindrome(i * j) && (max < i * j)) {
        max = i * j
      }
    }
  }
  return max
}
function largestPalindromeProduct (num) {
  // construct largest num - some space to opti here
  const dim = largestN(num)
  // remove all zero and non palidrome numbers and store largest, with time control
  // some space to optimize large number multiplication
  var t0 = performance.now()
  const a = matrix(dim)
  var t1 = performance.now()
  console.log('Calculation took ' + (t1 - t0) + ' milliseconds.')
  return a
}

largestPalindromeProduct(2) // 9009 1ms
largestPalindromeProduct(3) // 906609 8ms
largestPalindromeProduct(4) // 99000099 502ms
largestPalindromeProduct(5) // 9966006699 72s
