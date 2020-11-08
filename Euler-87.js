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
function primePowerTriples() {
    const m = 50000000;
    var p = makePrimes(Math.sqrt(m));
    var p2 = [];
    var p3 = [];
    var p4 = [];
    for (var i in p) {
        p2[i] = p[i] * p[i];
        p3[i] = p2[i] * p[i];
        p4[i] = p3[i] * p[i];
    }
    var s = 0;
    var h = {};
    for (var i2 = 0; i2 < p2.length; i2++) {
        var s2 = p2[i2];
        for (var i3 = 0; i3 < p3.length; i3++) {
            var s3 = s2 + p3[i3];
            if (s3 >= m) break;
            for (var i4 = 0; i4 < p4.length; i4++) {
                var s4 = s3 + p4[i4];
                if (s4 >= m) break;
                if (!h[s4]) {
                    s = s + 1;
                    h[s4] = true;
                }
            }
        }
    }
    return s;
}

primePowerTriples();
