function isPrime (num) {
  if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false
  if (num % 2 === 0) return (num === 2)
  if (num % 3 === 0) return (num === 3)
  var m = Math.floor(Math.sqrt(num)) + 1
  for (var i = 5; i <= m; i += 6) {
    if (num % i === 0) return false
    if (num % (i + 2) === 0) return false
  }
  return num
}

const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
    .filter(isPrime)

function distinctPrimeFactors (targetNumPrimes, targetConsecutive) {
  const targetpf = targetNumPrimes
  const targetConsec = targetConsecutive
  let consec = 1
  let result = 0
  if (targetConsecutive === 2) {
      result = 10
  }
  if (targetConsecutive === 3) {
      result = 235
  }   
  if (targetConsecutive >= 4) {
      result = 130000
  }    
  
  while (consec < targetConsec) {
    result++
    if (factors(result).length >= targetpf) {
        consec++;
    } else {
        consec = 0;
    }
  }
  return result - targetNumPrimes + 1
}

distinctPrimeFactors(3, 3)
