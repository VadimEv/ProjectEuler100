function intRightTriangles (n) {
  let result = 0
  let resultSolutions = 0
  for (let p = 2; p <= n; p += 2) {
    let numberOfSolutions = 0
    for (let a = 2; a < (p / 2); a++) {
      if (p * (p - 2 * a) % (2 * (p - a)) === 0) {
        numberOfSolutions++
      }
    }
    if (numberOfSolutions > resultSolutions) {
      resultSolutions = numberOfSolutions
      result = p
    }
  }
  return result
}
intRightTriangles(1000)
