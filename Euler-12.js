function divisibleTriangleNumber (n) {
  // Good luck!
  let number = 0
  let i = 0
  // function to check dvisors
  function checkDivisors (num) {
    let counter = 0
    const sqrt = Math.floor(Math.sqrt(num))
    for (var i = 1; i <= sqrt; i++) {
      if (num % i === 0) {
        counter += 2
      }
    }
    if (sqrt * sqrt === num) {
      counter--
    }
    return counter
  }
  // main function increments numbers
  while (checkDivisors(number) < n) {
    number += i
    i++
  }
  return number
}

divisibleTriangleNumber(500)
