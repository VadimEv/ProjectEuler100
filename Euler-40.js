function getDigit (n) {
  let r = 0
  let s = 0
  let k = 0
  while (s < n) {
    r = s
    s += 9 * 10 ** k++ * k
  }
  const h = n - r - 1
  const t = 10 ** (k - 1) + h / k
  const p = h % k
  return +String(t)[p]
}

function getlength (number) {
  return number.toString().length
}

function champernownesConstant (n) {
  var res = 1
  const l = getlength(n)
  for (var i = 0; i < l; i++) {
    res *= getDigit(10 ** i)
  }
  return res
}
champernownesConstant(100)
