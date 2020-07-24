function bigFactorials (n) {
    if (n < 0) {
        return null
    }
    let y = [BigInt(1)]
    for (let i = 1; i < n + 1; i++) {
        let k = BigInt(i)
        y[i] = y[i - 1] * k
    }
    return y
}
function combinatoricSelections (limit) {
  let result = 0
  let lim = limit
  let nLim = 100
  let fac = bigFactorials(nLim)
  for (let n = 1; n <= nLim; n++) {
    for (let r = 1; r < n; r++) {
        if (fac[n] / (fac[r] * fac[n-r]) >= limit) result++;
    }
  }
  return result;
}

combinatoricSelections(1000000);
