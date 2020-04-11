/* This one returns smallest common multiple of all Natural number less or equal to N */
/* Greatest common divisor, Euclid says Hi! */
var gcd = function (a, b) {
  if (!b) { return a }
  return gcd(b, a % b)
}

/* LArgest common multiple of 2 numbers */
var lcm = function (a, b) {
  return a * b / gcd(a, b)
}

/* Populate the array */
var numArr = function (n) {
  /* Keys method populates array with index values, which starts from Zero so we need to add one */
  const arr = [...Array(n).keys()].map(i => i + 1).reverse()
  return arr
}

/* In order to find LCM of N numbers we gonna call it reqursively for 2 numbers, reduce is ideal for this */
function smallestMult (n) {
  const sM = numArr(n).reduce(function (accumulator, currentValue) {
    return lcm(accumulator, currentValue)
  }, 1)
  return sM
}
smallestMult(20)
