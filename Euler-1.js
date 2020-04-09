/* Outputs the sum of numbers that are multiples of 3 or 5 below the speicified number */

function multiplesOf3and5(number) {
  // Good luck!
  let sum = 0;
  for (var i = 0; i < number; i++){
    if ((i % 3 == 0) || (i % 5 == 0)){
      sum += i;
    }
  }
  return sum;
}

multiplesOf3and5(1000);
