function arrangedProbability(limit) {
  var b = 15;
  var n = 21;

  while( n < limit){
      let btemp = 3 * b + 2 * n - 2;
      let ntemp = 4 * b + 3 * n - 3;

      b = btemp;
      n = ntemp;
  }
  return  b;
}

arrangedProbability(20);
