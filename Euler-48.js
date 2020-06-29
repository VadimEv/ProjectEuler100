function sumPair (a, b, result, carry, base) {
  if (a.length === 0 && b.length === 0 && !carry) {
    return result
  }
  /* get the smallest char, i.e. right one */
  const left = parseInt(a.pop() || '0', 10)
  const rigth = parseInt(b.pop() || '0', 10)
  /* Add them up and add carry from previous iteration */
  const nextNum = left + rigth + (carry || 0)
  return sumPair(a, b, nextNum % base + (result || ''), Math.floor(nextNum / base), base)
}

function add (a, b) {
  return sumPair(a.toString().split(''), b.toString().split(''), '', '', 10).toString()
}

// assume integers
function multi (a, b) {
    return Array.from({length: b}, (v, i) => a).reduce(function (a, b) { return add(a, b) })
}

function expi (a, b) {
    return Array.from({length: b}, (v, i) => a).reduce(function (a, b) { return multi(a, b) })
}