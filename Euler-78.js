function dv(a, b){
    return Math.floor(a /b);
}

function coinPartitions() {
    var p = [1];
    var n = 1;
    for (;;) {
        var i = 0;
        var k = 1;
        p.push(0);
        while (k < n + 1) {
            var sign = (i % 4 >= 2) ? -1 : 1;
            p[n] += sign * p[n - k];
            p[n] %= 1000000;
            i++;
            var j = (i % 2 == 0) ? dv(i, 2) + 1 : -(dv(i, 2) + 1);
            k = j * (3 * j - 1) / 2;
        }
        if (!p[n]) return n;
        n++;
    }
    return 0;

}

coinPartitions();
