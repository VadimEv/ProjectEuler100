function isDoublePalindrome (num) {
  const binary = num.toString(2)
  const numStr = num.toString()
  // do we need Zeros? only Heroes
  if (numStr === '0') { return false }
  if (numStr.split('').reverse().join('') === numStr && binary.split('').reverse().join('') === binary) {
    return true
  } else {
    return false
  }
}
function doubleBasePalindromes (n) {
  // Good luck!
  var sum = 0
  for (let i = 1; i < n; i++) {
    if (isDoublePalindrome(i)) {
      sum += i
    }
  }
  return sum
}

doubleBasePalindromes(1000000)
