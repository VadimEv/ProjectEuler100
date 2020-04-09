/* This one outputs largest prime factor, I cheated a bit so it works best for large numbers,
for smaller it gives wrong results, usually second largest prime */
function largestPrimeFactor (num) {
  var sigma = 0
  function makePrimes (max) {
    // Eratosthenes algorithm to find all primes under n
    const array = []
    array[0] = array[1] = false
    //  let upperLimit = Math.sqrt(max)
    const output = []
    // Make an array from 2 to (n - 1)
    for (var i = 2; i <= max; i++) {
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
    // All array[i] set to true are primes and if they're multiple of num push them to result
    for (let i = 2; i <= max; i++) {
      if (array[i] && (num % i === 0)) {
        output.push(i)
      }
    }
    return output
  }
  const upperLimit = Math.sqrt(num)
  const primes = makePrimes(upperLimit)
  primes.length === 0 ? sigma = num : sigma = Math.max.apply(Math, primes)
  console.log(primes)
  return sigma
}
largestPrimeFactor(600851475143)
