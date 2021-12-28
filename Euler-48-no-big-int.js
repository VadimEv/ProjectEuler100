function selfPowers(power, lastDigits) {
  var result = 0;
  var modulo = Math.pow(10, lastDigits);

  for (var i = 1; i < power + 1; i++) {
      let temp = i;
      for (var j = 1; j < i; j++) { temp *= i; if (temp > 1 + Number.MAX_SAFE_INTEGER / 1000) {
              temp %= modulo;
          }
      }

      result += temp;
      result %= modulo;
  }
  return result;
}

selfPowers(10, 3);
selfPowers(150, 6);
selfPowers(673, 7);
selfPowers(1000, 10);
