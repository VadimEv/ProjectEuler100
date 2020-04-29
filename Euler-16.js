/* Pretty easy at first glance, BUT WRONG, inaccurate beyond 53 bits, since MAX_SAFE_INTEGER = 9007199254740991 */
function falsePowerDigitSum (exponent) {
  // Good luck!
  let result = 0
  let num = Math.pow(2, exponent)
  while (num > 0) {
    result += num % 10
    num = Math.floor(num / 10)
  }
  return result
}

falsePowerDigitSum(15)

function PowerDigitSum (exponent) {
  // Now let's abuse bigInt:)
  if (exponent > 1023) {
    alert('Sorry, that is really TOO BIG');
  }
  const powerN = BigInt(Math.pow(2, exponent))
  // let's turn that to string
  const stringN = powerN.toString()
  // and turn that string into array
  const arrayN = stringN.split('')
  // we got array of symbols, we need array of digits, parseInt it with map method
  const arrayD = arrayN.map((x) => parseInt(x))
  // now sum it with reduce method
  const sum = arrayD.reduce(function (a, b) { return a + b })

  // For fun: one-liner, pretty readable one
  // return BigInt(Math.pow(2, exponent)).toString().split('').map((x) => parseInt(x)).reduce((a, b) => a + b)
  return sum
}

PowerDigitSum(15)
