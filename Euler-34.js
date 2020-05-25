// Remember euler-30 - it's kinda the same. BF upper bound is 7x9! which is 2540160
function factorial (n) {
  if (n === 0) {
    return 1
  }
  var p = 1
  for (let i = 1; i <= n; i++) {
    p *= i
  }
  return p
}

function digitFactorial () {
  // Good luck!
  var sum = 0
  var numbers = []

  for (let i = 10; i < 2540161; i++) {
    let sumOfFacts = 0
    let number = i
    while (number > 0) {
      const d = number % 10
      number = Math.floor(number / 10)
      sumOfFacts += factorial(d)
    }
    if (sumOfFacts === i) {
      sum += i
      numbers.push(i)
    }
  }
  return { sum, numbers }
}

digitFactorial()
