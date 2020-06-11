function isPandigital (n) {
  var marker = 0
  for (var i = 0; n > 0; i++) {
    marker |= 1 << n % 10
    n = n / 10 | 0
  }
  return 2 + marker === 1 << (i + 1)
}

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
function pandigitalPrime (n) {
  var result = 0
  var primes = []
  switch (n) {
    case 0:
      console.log('Zero length number? Rly')
      break
    case 1:
      console.log('Yehs right')
      break
    case 2:
      primes = makePrimes(21)
      break
    case 3:
      primes = makePrimes(321)
      break
    case 4:
      primes = makePrimes(4321)
      break
    case 5:
      primes = makePrimes(54321)
      break
    case 6:
      primes = makePrimes(654321)
      break
    case 7:
      primes = makePrimes(7654321)
      break
    case 8:
      primes = makePrimes(87654321)
      break
    default:
      primes = makePrimes(987654321)
  }
  for (let i = primes.length - 1; i >= 0; i--) {
    if (isPandigital(primes[i])) {
      result = primes[i]
      break
    }
  }
  return result
}

pandigitalPrime(7)
