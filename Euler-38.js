function isPandigital (n) {
  var marker = 0
  for (var i = 0; n > 0; i++) {
    marker |= 1 << n % 10
    n = n / 10 | 0
  }
  return 2 + marker === 1 << (i + 1)
}
function pandigitalMultiples () {
  for (let i = 9487; i >= 9234; i--) {
    const res = 100002 * i
    if (isPandigital(res)) {
      return res
    }
  }
  return null
}

pandigitalMultiples()
