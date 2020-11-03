function add(a, b) {
    var y = '';
    var ic = 0;
    do {
        var ia = Number(a.slice(-10));
        var ib = Number(b.slice(-10));
        var iy = ia + ib + ic;
        if (iy >= 1e10) {
            ic = 1;
            iy = iy - 1e10;
        } else {
            ic = 0;
        }
        y = ('0000000000' + iy).slice(-10) + y;
        a = a.slice(0, -10);
        b = b.slice(0, -10);
    } while (a || b || ic);
    while (y.charAt(0) == '0') {
        y = y.slice(1);
    }
    return y;
}

function sub(a, b) {
    var y = '';
    var ic = 0;
    do {
        var ia = Number(a.slice(-10));
        var ib = Number(b.slice(-10));
        var iy = ia - ib - ic;
        if (iy < 0) {
            ic = 1;
            iy = iy + 1e10;
        } else {
            ic = 0;
        }
        y = ('0000000000' + iy).slice(-10) + y;
        a = a.slice(0, -10);
        b = b.slice(0, -10);
        if (!a && !b && ic) {
            return -1;
        }
    } while (a || b || ic);
    while (y.charAt(0) == '0') {
        y = y.slice(1);
    }
    return y;
}

function nsqrt(x) {
    var a = '0';
    var n = '1';
    var s = String(x);
    for (;;) {
        var u = sub(s, n);
        if (u == 0) {
            return 0;
        } else if (u > 0) {
            s = u;
            a = add(a, '1');
            n = add(n, '2');
        } else {
            if (String(a).length >= 100) break;
            a = a + '0';
            s = s + '00';
            n = sub(n, '1');
            n = add(n + '0', '1');
        }
    }
    var y = 0;
    for (var i in a) {
        y += Number(a[i]);
    }
    return y;
}

function sqrtDigitalExpansion() {
    var ans = 0;
    for (var i = 1; i < 101; i++) {
        var x = nsqrt(i);
        ans += x;
    }
    return ans
}

sqrtDigitalExpansion();
