// Atkin algorithm to find all primes under n
function sieveAtkin (n) {
  const isPrime = []
  isPrime[0] = isPrime[1] = false
  isPrime[2] = isPrime[3] = true

  const max = 1500000
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
      }
      n -= x2
      if ((n <= upperLimit) && (n % 12 === 7)) {
        isPrime[n] = !isPrime[n]
      }
      n -= 2 * y2
      if ((i > j) && (n <= upperLimit) && (n % 12 === 11)) {
        isPrime[n] = !isPrime[n]
      }
    }
  }
  // Remove all prime squares in interval 5 - upperLimit
  for (let i = 5; i <= upperLimit; i++) {
    if (isPrime[i]) {
      const n = i * i
      for (let j = n; j <= upperLimit; j += n) {
        isPrime[j] = false
      }
    }
  }
  // All array[i] set to true are primes and if they're multiple of num push them to result
  for (let i = 6; i <= upperLimit; i++) {
    if (isPrime[i] && (i % 3 !== 0) && (i % 5 !== 0) && (i < n)) {
      output.push(i)
    }
  }

  return output
}

function isPrime (num) {
  if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false
  if (num % 2 === 0) return (num === 2)
  if (num % 3 === 0) return (num === 3)
  var m = Math.floor(Math.sqrt(num)) + 1
  for (var i = 5; i <= m; i += 6) {
    if (num % i === 0) return false
    if (num % (i + 2) === 0) return false
  }
  return true
}

// We need to find the coefficients A & B of n*2 + A*n + B giving primes from n=0, so B must be prime :)
function quadraticPrimesFast (range) {
  let nMax = 0

  const bPos = sieveAtkin(range + 1)
  var aMax = 0
  var bMax = 0
  for (let a = -range + 1; a < range + 1; a += 2) {
    for (let i = 1; i < bPos.length; i++) {
      for (let j = 0; j < 2; j++) {
        var n = 0
        var sign = (j === 0) ? 1 : -1
        var aOdd = (i % 2 === 0) ? -1 : 0 // Making A even if B is even
        while (isPrime(Math.abs(n * n + (a + aOdd) * n + sign * bPos[i]))) {
          n++
        }
        if (n > nMax) {
          aMax = a + aOdd
          bMax = bPos[i]
          nMax = n
        }
      }
    }
  }
  return 'product is:' + aMax * bMax + ' length is:' + nMax
}

function quadraticPrimes (range) {
  var aMax = 0
  var bMax = 0
  var nMax = 0

  for (let a = -range; a <= range; a++) {
    for (let b = -range; b <= range; b++) {
      var n = 0
      while (isPrime(Math.abs(n * n + a * n + b))) {
        n++
      }
      if (n > nMax) {
        aMax = a
        bMax = b
        nMax = n
      }
    }
  }
  return aMax * bMax
}
quadraticPrimes(1000)
