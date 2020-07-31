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

function nReverse(m) {
    return BigInt(m.toString().split('').reverse().join(''))
}

function isLychrel(n) {
    let y = BigInt(n)
    for (let i = 0; i < 50; i++) {
        y += nReverse(y);
        if (isPalindrome(y)) {
            return false
        }
    }
    return true
}
function countLychrelNumbers (num) {
   let start = 10
   let limit = num
   let result = 0

   for (let i = start; i < limit; i++) {
       if (isLychrel(i)) {
           result += 1
       }
   }
   return result
}

countLychrelNumbers(10000);
