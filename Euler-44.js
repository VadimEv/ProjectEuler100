function isPentagonal (x) {
  const xInverse = (Math.sqrt(1 + 24 * x) + 1) / 6
  return xInverse === Math.floor(xInverse)
}
function pentagonNumbers () {
  let result = 0
  let notFound = true
  let i = 1

  while (notFound) {
    i++
    const n = i * (-1 + i * 3) / 2
    for (let j = i - 1; j > 0; j--) {
      const m = j * (-1 + j * 3) / 2
      if (isPentagonal(n - m) && isPentagonal(n + m)) {
        result = n - m
        notFound = false
        break
      }
    }
  }
  return result
}

pentagonNumbers()
