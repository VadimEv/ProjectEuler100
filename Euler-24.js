// so we basically calculating permutations in alpabetical order.
// Can't say it's anything interesting
function factrorial (n) {
  if (n === 0) {
    return 0
  }
  var p = 1
  for (let i = 1; i <= n; i++) {
    p *= i
  }
  return p
}

// now we basically operate in factorial - based system
function lexicographicPermutations (num) {
  const factorials = []
  for (var j = 0; j < 10; j++) {
    factorials.push(factrorial(j))
  }
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var str = ''
  for (var i = arr.length - 1; i >= 0; i--) {
    var t = num / factorials[i] | 0
    num %= factorials[i]
    str += arr[t]
    arr.splice(t, 1)
  }
  return parseInt(str)
}

lexicographicPermutations(999999)
