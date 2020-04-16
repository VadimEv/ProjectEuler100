/* This one outputs sum of all primes SMALLER than given number, so be it prime, it does not get included */
function primeSummation (num) {
  var sigma = 0
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
  var primes = makePrimes(num)
  for (var p = 0; p < primes.length; p++) {
    // Check if last is given number
    if (primes[p] < num) { sigma += primes[p] }
  }
  return sigma
}
primeSummation(2000000)
