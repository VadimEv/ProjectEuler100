const get5digitPatterns = [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1]
]
const get6digitPatterns = [
    [1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 0, 1, 1, 1]
]
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


function patternFill (arr, n) {
    let filledPatetrn = Array(arr.length).fill(0)
    let temp = n
    for (let i = filledPatetrn.length - 1; i > -1; i-- ) {
        if (arr[i] === 1) {
            filledPatetrn[i] = Math.floor(temp % 10)
            temp /= 10 
        } else {
            filledPatetrn[i] = -1
        }
    }
    return filledPatetrn
}

function genNumber (rep, filledPattern) {
    let temp = 0
    for (let j = 0; j < filledPattern.length; j++) {
        temp *= 10
        temp += (filledPattern[j] === -1 ? rep : filledPattern[j])
    }
    return temp
}

function primeFamily( repNum, pattern) {
    let famSize = 1
    for (k = repNum + 1; k < 10; k++) {
        if (isPrime(genNumber(k, pattern))) famSize++
    }
    return famSize
}
function primeDigitReplacements() {
  let fiveDigitPattern = get5digitPatterns
  let sixDigitPattern = get6digitPatterns
  let result = 999999
  
  for (let i = 11; i < 1000; i += 2) {
      if ( i % 5 === 0) {
          i += 2
      }
      let patterns = (i < 100) ? fiveDigitPattern : sixDigitPattern
      
      for (let j = 0; j < patterns.length; j++) {
          for (let k = 0; k < 3; k++) {
              //avoid leading zero
              if (patterns[j][0] === 0 && k === 0) {
                  k++
              }
              let pattern = patternFill(patterns[j], i)
              let candidate = genNumber(k, pattern)
              
              if (candidate < result && isPrime(candidate)) {
                  if (primeFamily(k, pattern) === 8){
                      result = candidate
                      break
                  }
              }
          }
      }
  }
  return parseInt(result)
}

primeDigitReplacements();