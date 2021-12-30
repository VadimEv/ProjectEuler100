function largestExponential(baseExp) {
  let j = 0;
  let max = 0;
  for (var i = 1; i < baseExp.length; i++ ) {
    const curVal = Math.log(baseExp[i][0]) * baseExp[i][1];
    if ( curVal > max ){
      max = curVal;
      j = i;
    }
  }
  return baseExp[j]
}

// Only change code above this line

const testArray1 = [
  [492798,527927],[30125,670983],[895603,504906],[450785,531539],[840237,507276],[380711,538522],[63577,625673],[76801,615157],[502694,527123]
];

largestExponential(testArray1);
