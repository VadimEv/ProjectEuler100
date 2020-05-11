// sum all factors of a number
function sumFactor (num) {
  let sum = 1
  const limit = Math.floor(num / 2)
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      sum += i
    }
  }
  return sum
}

function findAbundant (num) {
  const list = []
  for (let i = 2; i <= num; i++) {
    if (i < sumFactor(i)) {
      list.push(i)
    }
  }
  return list
}

function isAbundant (num) {
  return (num > sumFactor(num))
}

function sumOfNonAbundantNumbers (n) {
  var sum = 0
  const SumOfTwoAbundants = new Array(28123 + 1)
  const abundants = findAbundant(n)

  for (var i = 0; i < abundants.length; i++) {
    for (var j = i; j < abundants.length; j++) {
      if (abundants[i] + abundants[j] <= 28123) {
        SumOfTwoAbundants[abundants[i] + abundants[j]] = true
      } else {
        break
      }
    }
  }

  for (var k = 1; k <= n; k++) {
    if (!SumOfTwoAbundants[k]) {
      sum += k
    }
  }
  return sum
}
sumOfNonAbundantNumbers(10000)
