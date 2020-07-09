function consecutivePrimeSum(a) {
  const limit = a
  const notPrime = new Uint8Array(limit)
  const primes = []
    
  notPrime[0] = notPrime[1] = 1
  for (let i = 2; i < limit; i++) {
    if (notPrime[i] === 0) {
    primes.push(i);
     for (let j = i * i; j < limit; j += i) {
      notPrime[j] = 1;
     }
   }
 }    
    
  let maxSum = 0;
  let maxRun = -1;
  for (let i = 0; i < primes.length; i++) {
    let sum = 0;
    for (let j = i; j < primes.length; j++) {
      sum+= primes[j];
      if (sum > limit)
      break;
      if (!notPrime[sum] && sum > maxSum && j - i > maxRun) {
        maxRun = j - i;
        maxSum = sum;
      }
    }
  }    
  return maxSum    
}

consecutivePrimeSum(1000000);