/* Outputs N-digit fibonacci number */
var performance = window.performance
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

function digitFibonacci (n) {
  let f1 = 1
  let f2 = 2
  let fn = 0
  let counter = -2
  //  console.log(counter)
  do {
    fn = add(f2, f1)
    f1 = f2
    f2 = fn
    counter++
  //    console.log(counter + 'th fibonnacci is:' + fn)
  } while (fn.length <= n)
  console.log(fn)
  return counter
}

var t0 = performance.now()
digitFibonacci(1000)
var t1 = performance.now()
console.log('Calculation took ' + (t1 - t0) + ' milliseconds.')
