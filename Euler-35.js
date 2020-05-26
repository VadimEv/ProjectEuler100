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

function circularPrimes (n) {
  // Below 100
  var num = 13

  function RotatePrime (n) {
    var num = String(n)
    for (var i = 1; i < num.length; i++) {
      num = num.slice(-1) + num.slice(0, num.length - 1)
      if (!isPrime(parseInt(num, 10))) {
        return false
      }
    }
    return true
  }

  for (var i = 101; i < n; i += 2) {
    if (isPrime(i) && RotatePrime(i)) {
      num++
    }
  }
  return num
}
circularPrimes(1000000)
