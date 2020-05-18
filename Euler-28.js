// Let's call main diagonal North-Eastern one. we can notice that it's follows simple pattern:
// 1^2 + 3^2 + 5^2 + 7^2 + ...
function spiralDiagonals (n) {
  // Good luck!
  if (n < 1) {
    console.log('nothing to sum')
    return false
  }
  let sum = 1
  for (let i = 3; i <= n; i += 2) {
    sum = sum + 4 * i * i - 6 * (i - 1)
  }
  return sum
}

spiralDiagonals(5)
