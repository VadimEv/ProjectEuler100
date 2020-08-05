 function isPrime (num) {
  if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false
  if (num % 2 === 0) return (num === 2)
  if (num % 3 === 0) return (num === 3)
  var m = Math.floor(Math.sqrt(num)) + 1
  for (var i = 5; i <= m; i += 6) {
    if (num % i === 0) return false
    if (num % (i + 2) === 0) return false
  }
  return true
}

function primePairSets() {

    function isPrimePair(x, y) {
  return isPrime(+(x + y)) && isPrime(+(y + x));
}

    function union(x, y) {
  var a = [];
  for (var j = 0; j < y.length; j++) {
    for (var i = 0; i < x.length; i++) {
      if (y[j] == x[i]) {
        a.push(y[j]);
	break;
      }
    }
  }
  return a;
}

    function find_pair(a, b) {
  if (b.length == 5) {
    for (var i = 0; i < b.length; i++) {
      ans += +b[i];
    }
  } else {
    for (var i = 0; i < a.length; i++) {
      var a1 = union(a, primes[a[i]]);
      var b1 = b.concat(a[i]);
      find_pair(a1, b1);
    }
  }
}

        
    function make_primes(x) {
    var a = [];
    for (var k in primes) {
        if (isPrimePair(x, k)) {
            a.unshift(k);
        }
    }
        if (a.length >= 4) {
        find_pair(a, [n]);
        }
        primes[String(n)] = a;
    }

        var primes = {'3': []};
        var n = 7;
        var ans = 0;
        for (;;) {
            if (isPrime(n)) {
            make_primes(n);
            if (ans) break;
        }
        n += 4;
        if (isPrime(n)) {
            make_primes(n);
            if (ans) break;
        }
        n += 2;
    }
    
    return ans
}

primePairSets();
