/* For this one we need a reasonalbe upper bound, so.... 9^5 = 59049, thus 5 digit
 one is 295245, and with 5 digit numbers we can make 6 digit one which is 354294, welp 355000  */
function digitnPowers (n) {
  let result = 0

  for (let i = 2; i < 355000; i++) {
    let sumOfPowers = 0
    let number = i
    while (number > 0) {
      const d = number % 10
      number = Math.floor(number / 10)
      let temp = d
      // exponentiation, it's faster than Math.pow
      for (let j = 1; j < n; j++) {
        temp *= d
      }
      sumOfPowers += temp
    }
    if (sumOfPowers === i) {
      result += i
    }
  }
  return result
}

digitnPowers(3)
