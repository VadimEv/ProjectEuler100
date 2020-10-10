function gcd (a, b) {
  if (!b) { return a }
  return gcd(b, a % b)
}
function countingFractionsInARange() {
    let limit = 12000;
    let a = 3;
    let b = 2;

    var result = 0;
    for (var d = 5; d < limit + 1; d++){
        for (var n = Math.floor(d / a) + 1; n < (d - 1) / b + 1; n++){
            if (gcd(n, d) == 1) {
                result++
            }
        }
    }
    return result
}

countingFractionsInARange();
