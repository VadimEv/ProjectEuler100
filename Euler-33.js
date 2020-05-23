function gcd (a, b) {
  if (!b) { return a }
  return gcd(b, a % b)
}
function digitCancellingFractions () {
  var denproduct = 1
  var nomproduct = 1

  for (let i = 1; i < 10; i++) {
    for (let den = 1; den < i; den++) {
      for (let nom = 1; nom < den; nom++) {
        if ((nom * 10 + i) * den === nom * (i * 10 + den)) {
          denproduct *= den
          nomproduct *= nom
        }
      }
    }
  }
  denproduct /= gcd(nomproduct, denproduct)
  return denproduct
}

digitCancellingFractions()
