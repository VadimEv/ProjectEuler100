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

function tetri (a, b) {
    return Array.from({length: b}, (v, i) => a).reduce(function (a, b) { return expi(a, b) })
}

function penti (a, b) {
    return Array.from({length: b}, (v, i) => a).reduce(function (a, b) { return tetri(a, b) })
}

function selfPowers(power, lastDigits) {
  let sum = BigInt(0)
  let numberN = BigInt(1)
  let powerN = BigInt(power)
  for (let i = numberN; i <= powerN; i = i + 1n) {
    sum += i ** i
  }
    const ans = parseInt(sum.toString().slice(-lastDigits))
   return ans
}
selfPowers(1000, 10);
