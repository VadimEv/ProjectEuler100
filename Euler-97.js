function lrgNonMersennePrime() {
    var n = 28433;
    var i = 7830457;
    while (i >= 4) {
        n = (n * 16) % 1e10;
        i -= 4;
    }
    while (i >= 1) {
        n = (n * 2) % 1e10;
        i -= 1;
    }
    return (n + 1) % 1e10;
}

lrgNonMersennePrime();