// We played with spiral before in 28 now we need to add prime check only
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

function spiralPrimes() {
  let p = 0;
  for (let m = 3; ; m+= 2) {
    p+= isPrime((m - 1) * m + 1);
    p+= isPrime((m - 2) * m + 2);
    p+= isPrime((m - 3) * m + 3);
    if (10 * p < 2 * m - 1) {
      return m;
    }
  }
}

spiralPrimes();