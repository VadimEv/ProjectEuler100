function digitSum(n) {
    return n.toString().split('').map((x) => parseInt(x)).reduce((a, b) => a + b)
}

function convergentsOfE() {
  let limit = 100
  let result = 0
  
  let den = BigInt(1)
  let num = BigInt(2)
  
  for (var i = 2; i < limit + 1; i++) {
    let temp = BigInt(den)
    let c = (i % 3 == 0) ? 2 * (i /3) : 1
    den = num
    num = BigInt(c) * den + temp  
  }
  result = digitSum(num)
  return result
}

convergentsOfE();