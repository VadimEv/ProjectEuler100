function isPentagonal (x) {
  const xInverse = (Math.sqrt(1 + 24 * x) + 1) / 6
  return xInverse === Math.floor(xInverse)
}
function triPentaHexa (n) {
  let result = 0
  // let's save the calc here from n
  let i = 285

  while (true) {
    i++
    result = i * (2 * i - 1)
    if (isPentagonal(result)) {
      break
    }
  }
  return result
}

triPentaHexa(40756)
