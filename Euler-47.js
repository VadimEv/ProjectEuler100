function makePrimes (max) {
  // Eratosthenes algorithm to find all primes under n
  const array = []
  //  let upperLimit = Math.sqrt(max)
  const output = []
  // Make an array from 2 to (n - 1)
  for (var i = 0; i <= max; i++) {
    array.push(true)
  }
  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      for (var j = i * i; j <= max; j += i) {
        array[j] = false
      }
    }
  }
  // All array[i] set to true are primes
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      output.push(i)
    }
  }
  return output
}


function numberOfFactors (n, primes) {
  let nod = 0 // number of divisors
  let pfactor = true // prime factor
  let remainder = n
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] * primes[i] > n) {
      nod++
    }
    pfactor = false
    while (remainder % primes[i] === 0) {
      pfactor = true
      remainder = remainder / primes[i]
    }
    if (pfactor) {
      nod++
    }
    if (remainder === 1) {
      return nod
    }
  }
  return nod
}

function distinctPrimeFactors (targetNumPrimes, targetConsecutive) {
  const primes = makePrimes(100000)
  const targetpf = targetNumPrimes
  const targetConsec = targetConsecutive
  let consec = 1
  let result = 2 * 3 * 5 * 7
  while (consec < targetConsec) {
    result++
    if (numberOfFactors(result, primes) >= targetpf) {
      consec++
    } else {
      consec = 0
    }
  }

  return result
}

distinctPrimeFactors(4, 4)
