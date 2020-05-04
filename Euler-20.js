function sumFactorialDigits (n) {
  const limitN = BigInt(n)
  let numberN = BigInt(1)
  for (let i = BigInt(2); i <= limitN; i = i + 1n) {
    numberN *= i
  }
  // Now old trcik from 16th problem.
  return numberN.toString().split('').map((x) => parseInt(x)).reduce((a, b) => a + b)
}

sumFactorialDigits(100)
