function gcd (a, b) {
  if (!b) { return a }
  return gcd(b, a % b)
}

function singularIntRightTriangles() {
    const limit = 1500000;
    const triangles = new Int32Array(limit + 1);
 
    var result = 0;
    var mlimit = Math.floor(Math.sqrt(limit / 2));

    for (var m = 2; m < mlimit; m++) {
        for (var n = 1; n < m; n++) {
            if (((n + m) % 2) == 1 && gcd(n, m) == 1) {
                var a = m * m + n * n;
                var b = m * m - n * n;
                var c = 2 * m * n;
                var p = a + b + c;
                while(p < limit + 1){
                    triangles[p]++;
                    if (triangles[p] == 1) result++;
                    if (triangles[p] == 2) result--;
                    p += a+b+c;
                }
            }
        }
    }
    
return result
}

singularIntRightTriangles();    