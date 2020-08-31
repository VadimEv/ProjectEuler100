function func(x) {
  var a, b, c, d, e, f, k, m, n, s;

  k = Math.floor(Math.sqrt(x));
  if (k * k == x) return 0;

  a = k, e = k, f = 1, n = 0, m = [];
  for (;;) {
    b = (x - e * e) / f;
    c = Math.floor((k + e) / b);
    d = c * b - e;
    s = b + ':' + d;
    if (m[s]) break;
    m[s] = 1;
    a = c, e = d, f = b, n += 1;
  }
  return n;
}

function oddPeriodSqrts() {
    var ans = 0;
    for (var n = 2; n <= 10000; n++) {
        var p;
        p = func(n);
        if (p % 2) {
            ans += 1;
        }
    }
    return ans
}

oddPeriodSqrts();