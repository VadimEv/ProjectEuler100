function longestCollatzSequence (limit) {
  let counter = 0
  let max = 0
  for (var i = 2; i < limit; i++) {
    const j = iterator(i)
    // console.log(i, j)
    if (j > counter) {
      counter = j
      max = i
    }
  }
  function iterator (lim) {
    let len = 1
    while (lim > 1) {
      lim = collaTz(lim)
      len++
    }
    return len
  }
  // Good luck!
  function collaTz (n) {
    return (n > 1) ? ((n % 2 === 0) ? (n / 2) : (3 * n + 1)) : 1
  }
  return max
}

longestCollatzSequence(14)
