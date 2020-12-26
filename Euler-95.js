function properDiv(y, m) {
    for (var i = 2; i <= m; i++) {
        var a = 1;
        for (var j = 2; j * j <= i; j++) {
            if (i % j == 0) {
                a += j;
                if (j * j != i) {
                    a += i / j;
                }
            }
        }
        y[i] = a;
    }
}
function amicableChains() {
  const m = 1000000;
  var y = [];
  properDiv(y, m);
  var x = [];
  var a = 0;
  var k = 0;
  for (var i in y) {
      var s = i;
      var p = {};
      var n = 1;
      while (s && !x[s] && !p[s]) {
          p[s] = n++;
          s = y[s];
      }
      if (x[s]) {
          x[i] = x[s];
      } else if (s) {
          var l = n - p[s];
          for (var q in p) {
              x[q] = l;
          }
          if (l > k) {
              k = l;
              a = s;
          }
      }
  }
  return a;
}

amicableChains();