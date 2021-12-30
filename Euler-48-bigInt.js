function selfPowers(power, lastDigits) {
  let sum = BigInt(0)
  let numberN = BigInt(1)
  let powerN = BigInt(power)
  for (let i = numberN; i <= powerN; i = i + 1n) {
    sum += i ** i
    }
  const ans = Number(sum.toString().slice(-lastDigits))
  return ans
}
selfPowers(1000, 10);