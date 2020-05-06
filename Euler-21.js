function sumFactor (num) {
  let root = Math.floor(Math.sqrt(num))
  let sum = 1
  if (root * root === num) {
    sum += root
    root--
  }
  for (let i = 2; i < root; i++) {
    if (num % i === 0) {
      sum = sum + i + (num / i)
    }
  }
  return sum
}
// now let's bruteforce it
function sumAmicableNum (n) {
  let factorOne = 0
  let factorTwo = 0
  var sumAmicible = 0
  for (let i = 2; i <= n; i++) {
    factorOne = sumFactor(i)
    if (factorOne > i && factorOne <= n) {
      factorTwo = sumFactor(factorOne)
      if (factorTwo === i) {
        sumAmicible += (i + factorOne)
      }
    }
  }
  return sumAmicible
}

sumAmicableNum(10000)
