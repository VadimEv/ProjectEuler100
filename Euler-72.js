function countingFractions(limit) {
  let phi = [];
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    phi.push(i);
  }

  for(let i = 2; i <= limit; i++){
    if (phi[i] === i) {
      for (let j = i; j <= limit; j+= i) {
        phi[j] = phi[j] / i * (i - 1);
      }
    }
    sum+= phi[i];
  }
  return sum;
}
countingFractions(1000000);