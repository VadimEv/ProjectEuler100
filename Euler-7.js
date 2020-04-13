/* Instead of sieving this function concurently checks all integers on prime and returns after criteria is met */
/* Check if number is prime */
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
function nthPrime (n) {
  const primes = []
  let counter = 0
  let i = 0
  do {
    i += 1
    if (isPrime(i)) {
      primes.push(i)
      counter += 1
    }
  } while (counter < n)

  return primes.pop()
}

nthPrime(101)
