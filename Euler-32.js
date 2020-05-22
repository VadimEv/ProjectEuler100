// We need multiplicand between 1 to 9 and multiplicand between 1234 and 9876 or
// multiplicand from 12 to 98 and multiplicand between 123 and 987
// Bitwise OR operator with leftmost assignment for teh win!
function isPandigital (n) {
  var marker = 0
  for (var i = 0; n > 0; i++) {
    marker |= 1 << n % 10
    n = n / 10 | 0
  }
  return 2 + marker === 1 << (i + 1)
}
// set can only contain unique values
const products = new Set()
function sumRange (mcdS, mcdL, mlS, mlL) {
  for (var i = mcdS; i <= mcdL; i++) {
    for (var j = mlS; j <= mlL; j++) {
      var x = i * j
      var p = Number('' + i + j + x)
      if (isPandigital(p)) {
        products.add(x)
      }
    }
  }
}

function pandigitalProducts () {
  sumRange(1, 9, 1234, 9876)
  sumRange(12, 98, 123, 987)
  return [...products].reduce((a, b) => a + b, 0)
}

pandigitalProducts()
