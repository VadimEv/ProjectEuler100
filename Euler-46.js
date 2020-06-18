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

function isTwiceSquare (x) {
  const squared = Math.sqrt(x / 2)
  return squared === Math.floor(squared)
}

function goldbachsOtherConjecture (n) {
  const primes = makePrimes(10000)
  let notFound = true
  let result = 1
  while (notFound) {
    result += 2
    notFound = false
    let j = 0
    while (result >= primes[j]) {
      if (isTwiceSquare(result - primes[j])) {
        notFound = true
        break
      }
      j++
    }
  }
  return result
}

goldbachsOtherConjecture()
