function func(x) {
  var a, b, c, d, e, f, k, n;
  var p, q;

  k = Math.floor(Math.sqrt(x));
  if (k * k == x) return 0;

  a = k, e = k, f = 1, n = 1;
  p = [1, k], q = [0, 1];

  for (;;) {
    b = (x - e * e) / f;
    c = Math.floor((k + e) / b);
    d = c * b - e;
    var s = b + ':' + d;
    a = c, e = d, f = b;
    if (a == 2 * k && n % 2 == 0) break;
    n += 1;
    p[n] = a * p[n - 1] + p[n - 2];
    q[n] = a * q[n - 1] + q[n - 2];
  }

  return p[n];
}

function diophantineEquation() {
   let result = 0
   let max = 0
   for (let d = 2; d < 1001; d++) {
    var x = func(d)
    if (x > max){
        max = x
        result = d
    }
       
   }
   return result 
}

diophantineEquation();
