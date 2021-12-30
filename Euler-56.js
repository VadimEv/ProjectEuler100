function power(numA, numB) {
  let sum = 1n;
  for (let b = 0; b < numB; b++) {
    sum = sum * BigInt(numA);
  }
  return sum;
}

function digitSum(numA, numB) {
  let digitsSum = 0;
  let number = power(numA, numB);
  while (number > 0n) {
    const digit = number % 10n;
    digitsSum += parseInt(digit, 10);
    number = number / 10n;
  }
  return digitsSum;
}

function powerfulDigitSum(n) {
  const limit = n - 1
  let result = 0;

  for (let a = limit; a > 0; a--) {
    for (let b = limit; b > 0; b--) {
        let sum = digitSum(a, b);
        if (sum > result)
            result = sum;
    }
  }
  return result
}

powerfulDigitSum(3);
