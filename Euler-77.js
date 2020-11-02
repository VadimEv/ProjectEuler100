function makePrimes (max) {
  const array = []
  const output = []
  for (var i = 0; i <= max; i++) {
    array.push(true)
  }
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      for (var j = i * i; j <= max; j += i) {
        array[j] = false
      }
    }
  }
  for (let i = 2; i <= max; i++) {
    if (array[i]) {
      output.push(i)
    }
  }
  return output
}

function primeSummations() {

    var target = 2;           
    const primes = makePrimes(1000);
           
    while (true) {
        var ways = new Int32Array(target + 1);;
        ways[0] = 1;
 
        for (var i = 0; i < primes.length; i++) {                    
            for (var j = primes[i]; j < target + 1; j++) {
                ways[j] += ways[j - primes[i]];
            }
        }
                                 
        if (ways[target] > 5000) break;
        target++;
    }
    return target
}

primeSummations();
