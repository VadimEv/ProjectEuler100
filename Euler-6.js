/* This one really easy, out put the difference between square of sum and sum of squares */
function sumSquareDifference (n) {
  const squaredSum = n * n * (n + 1) * (n + 1) / 4
  const sumSquares = n * (n + 1) * (2 * n + 1) / 6
  return squaredSum - sumSquares
}

sumSquareDifference(100)
