function distinctPowers (n) {
  const arr = []

  for (let a = 2; a <= n; a++) {
    for (let b = 2; b <= n; b++) {
      var result = Math.pow(a, b)
      if (!arr.includes(result)) {
        arr.push(result)
      }
    }
  }
  return arr.length
}

distinctPowers(30)
