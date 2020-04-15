function specialPythagoreanTriplet (num) {
  const sumOfabc = num
  function gcd (a, b) {
    if (!b) { return a }
    return gcd(b, a % b)
  }
  function gcdMax (arr) {
    return arr.reduce((a, b) => gcd(a, b))
  }
  const softLimit = Math.floor(Math.sqrt(sumOfabc / 2))
  // Euclid says Hi! again
  let k = 0
  let d = 0
  let n = 0
  for (let m = 2; m <= softLimit; m++) {
    if ((n / 2) % m === 0) {
      if (m % 2 === 0) { // ensure that we find an odd number for k
        k = m + 1
      } else {
        k = m + 2
      }
      while (k < 2 * m && k <= sumOfabc / (2 * m)) {
        if (((sumOfabc / (2 * m)) % k === 0) && (gcd(k, m) === 1)) {
          d = sumOfabc / 2 / (k * m)
          n = k - m
          let a = d * (m ** 2 - n ** 2)
          let b = 2 * d * n * m
          let c = d * (m * m + n * n)
          return a * b * c
        }
        k += 2
      }
    }
  }
}

specialPythagoreanTriplet(1000)
