function productSumNumbers() {
    var u = {};

    function gen(n, r, s) {
        var k = r - s;
        if (k >= 2 && (!u[k] || u[k] > r)) {
            u[k] = r;
        }
        for (var i = 2; i <= n; i++) {
            if (r * i - (s + i - 1) > 12000) break;
            gen(i, r * i, s + i - 1);
        }
    }

    for (var i = 2; i <= 12000; i++) {
        gen(i, i, i - 1);
    }

    var v = {};
    for (var i in u) {
        v[u[i]] = true;
    }
    var w = 0;
    for (var i in v) {
        w += Number(i);
    }
    
    return w
}

productSumNumbers();
