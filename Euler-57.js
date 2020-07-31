function digitLen(n) {
    return n.toString().split('').map((x) => parseInt(x)).length
}
function squareRootConvergents() {
  const limit = 1000;
  let result = 0;
 
  let den = BigInt(2)
  let num = BigInt(3)

 
  for (let i = 1; i < limit; i++) {
     num += 2n * den;
     den = num - den;
     if ( digitLen(num) > digitLen(den) ) {
         result++;
     }
  }
  return result;
}

squareRootConvergents();
