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

function isTruncatable (num) {
  for (var div = 10; div < num; div *= 10) {
    if (!isPrime(num % div) || !isPrime(num / div | 0)) {
      return false
    }
  }
  return true
}

function truncatablePrimes (n) {
  var sum = 0
  var num = 0
  for (var i = 23; num < n; i += 2) {
    if (isPrime(i) && isTruncatable(i)) {
      num++
      sum += i
    }
  }
  return sum
}

truncatablePrimes(11)
