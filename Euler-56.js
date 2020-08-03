function digitSum(n) {
    return n.toString().split('').map((x) => parseInt(x)).reduce((a, b) => a + b)
}

function powerfulDigitSum() {
  const limit = 100
  let result = BigInt(1)
  
  for (let a = limit - 1; a > 0; a--) {
    for (let b = limit - 1; b > 0; b--) {
        let number = BigInt(a) ** BigInt(b);
        let sum = digitSum(number);
        if (sum > result)
            result = sum;
    }
  }
  return result    
}

powerfulDigitSum();
