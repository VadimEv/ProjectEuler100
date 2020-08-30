function q(m) {
  return function (x) {
    var s = (8 * m - 16) * x + (m * m - 8 * m + 16);
    return (Math.sqrt(s) + (m - 4)) % (2 * m - 4) == 0;
  }
}

function cyclicalFigurateNums() {
    let q3 = q(3);
    let q4 = q(4);
    let q5 = q(5);
    let q6 = q(6);
    let q7 = q(7);
    let q8 = q(8);

    var f3 = 0;
    var f4 = 0;
    var f5 = 0;
    var f6 = 0;
    var f7 = 0;
    var f8 = 0;

    var v = [];
    function r(k) {
        if (k == 6) {
            if (v[0] == v[6]) {
                ans = (v[0] + v[1] + v[2] + v[3] + v[4] + v[5]) * 101;
            }
        } else {
        var a = v[k] * 100;
        for (var i = v[0]; i < 100; i++) {
            var b = a + i;
            if (f3 == 0 && q3(b)) {
                f3 = 1; v[k + 1] = i; r(k + 1); f3 = 0;
                }
            if (f4 == 0 && q4(b)) {
                f4 = 1; v[k + 1] = i; r(k + 1); f4 = 0;
                }
            if (f5 == 0 && q5(b)) {
                f5 = 1; v[k + 1] = i; r(k + 1); f5 = 0;
                }
            if (f6 == 0 && q6(b)) {
                f6 = 1; v[k + 1] = i; r(k + 1); f6 = 0;
                }
            if (f7 == 0 && q7(b)) {
                f7 = 1; v[k + 1] = i; r(k + 1); f7 = 0;
                }
            if (f8 == 0 && q8(b)) {
                f8 = 1; v[k + 1] = i; r(k + 1); f8 = 0;
                }
            }
        }
    }
    let ans = 0;
    for (var i = 10; i < 100; i++) {
        v[0] = i;
        r(0);
    }
    return ans
}
cyclicalFigurateNums();