function makePrimes (max) {
  // Eratosthenes algorithm to find all primes under n
  const array = []
  //  let upperLimit = Math.sqrt(max)
  const output = []
  // Make an array from 2 to (n - 1)
  for (var i = 0; i <= max; i++) {
    array.push(true)
  }
  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      for (var j = i * i; j <= max; j += i) {
        array[j] = false
      }
    }
  }
  // All array[i] set to true are primes
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      output.push(i)
    }
  }
  return output
}

function Permute(a, b) {

    let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (a > 0) {
        cnt[a % 10]++;
        a = a / 10 | 0;
    }
    while (b > 0) {
        cnt[b % 10]--;
        b = b / 10 | 0;
    }
    return cnt.every(x => x === 0);
}

function primePermutations() {
  const Primes = makePrimes(10000)
    
    for (let a = 1489; a < 3340; a++) {

        let b = a + 3330;
        let c = b + 3330;

        if (Primes.includes(a) && Primes.includes(b) && Primes.includes(c) && Permute(a, b) && Permute(b, c)) {
            return (a * 10000 + b) * 10000 + c;
        }
    }
    return null;
}

primePermutations();