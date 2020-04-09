/* Outputs the sum of even Fibonacci numbers below speicified one */
function fiboEvenSum (num) {
  var i1 = 0
  var i2 = 1
  var i3 = 0
  var sigma = 0
  while (i2 <= num) {
    (i2 % 2 === 0) ? (sigma += i2) : (sigma += 0)
    i3 = i2 + i1
    i1 = i2
    i2 = i3
  }
  return sigma
}
fiboEvenSum(10)
