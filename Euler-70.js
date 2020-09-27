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
function totientPermutation() {
    var best = 1;
    var phiBest = 1;
    var bestRatio = Number.MAX_SAFE_INTEGER;
    var phi = 0;
    var ratio = 0;
 
    const limit = 10000000;
    const lowerbound = 2000;
    const upperbound = 5000;
    const primes = makePrimes(upperbound);
 
    for (var i = 1; i < primes.length; i++) {
        for (var j = i + 1; j < primes.length; j++) {
            let n = primes[i] * primes[j]
            if (n > limit) break;
            phi = (primes[i] - 1) * (primes[j] - 1);
            ratio = n / phi;
            if (Permute(n, phi) && bestRatio > ratio) {
                best = n;
                phiBest = phi;
                bestRatio = ratio;
                //console.log(n, phi, ratio);
            }
        }
    }
  return best
}
totientPermutation();