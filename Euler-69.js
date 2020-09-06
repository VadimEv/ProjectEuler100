function totientMaximum() {
    const L = 1000000
  // Good luck!
    var n =1, k = 0;
    var primes = [2, 3, 5, 7, 11, 13, 17, 19, 21, 23, 29, 31]
    while (primes[k] * n < L){
        n *= primes[k++]
    }
    return n
}

totientMaximum();