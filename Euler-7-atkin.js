/* This one return's N-th prime number */
/* Since we already seen sieve of Erthosphenes, we gonna roll something more... contemporary now, Atkin */
/* const max = Number.MAX_SAFE_INTEGER */
const max = 15000000000
function nthPrime (n) {
  // Atkin algorithm to find all primes under n
  const isPrime = []
  isPrime[0] = isPrime[1] = false
  isPrime[2] = isPrime[3] = true
  let counter = 2
  const upperLimit = Math.floor(Math.sqrt(max))
  const output = [2, 3, 5]
  for (var i = 4; i <= upperLimit; i++) {
    isPrime.push(false)
  }
  let x2 = 0
  // x2 y2 are squares of i j, presumably all primes are quadratic forms
  for (let i = 1; i <= upperLimit; i++) {
    x2 += 2 * i - 1
    let y2 = 0
    for (let j = 1; j <= upperLimit; j++) {
      y2 += 2 * j - 1
      let n = 4 * x2 + y2
      if ((n <= upperLimit) && (n % 12 === 1 || n % 12 === 5)) {
        isPrime[n] = !isPrime[n]
        counter += 1
      }
      n -= x2
      if ((n <= upperLimit) && (n % 12 === 7)) {
        isPrime[n] = !isPrime[n]
        counter += 1
      }
      n -= 2 * y2
      if ((i > j) && (n <= upperLimit) && (n % 12 === 11)) {
        isPrime[n] = !isPrime[n]
        counter += 1
      }
    }
  }
  // Remove all prime squares in interval 5 - upperLimit
  for (let i = 5; i <= upperLimit; i++) {
    if (isPrime[i]) {
      let n = i * i
      for (let j = n; j <= upperLimit; j += n) {
        isPrime[j] = false
        counter -= 1
      }
    }
  }
  // All array[i] set to true are primes and if they're multiple of num push them to result
  for (let i = 6; i <= upperLimit; i++) {
    if (isPrime[i] && (i % 3 !== 0) && (i % 5 !== 0)) {
      output.push(i)
    }
  }

  return output[n]
}
nthPrime(n)
