function endsWith89(n) {
  do {
    let s = 0;
    while (n) {
      let x = n % 10;
      s+= x * x;
      n = n / 10 | 0;
    }
    n = s;
  } while (n !== 1 && n !== 89);
  return n === 89;
}

let cache = [false];
for (let i = 1; i <= 567; i++) {
  cache.push(endsWith89(i));
}

function squareDigitChains() {
  let res = 0;

  let factorials = [1, 1, 2, 6, 24, 120, 720, 5040];

  for (let g = 0; g <= 9; g++)
  for (let f = 0; f <= g; f++)
  for (let e = 0; e <= f; e++)
  for (let d = 0; d <= e; d++)
  for (let c = 0; c <= d; c++)
  for (let b = 0; b <= c; b++)
  for (let a = 0; a <= b; a++) {

    let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let dig = [a, b, c, d, e, f, g];
    let sum = 0;

    for (let di of dig) {
      sum+= di * di;
      cnt[di]++;
    }

    if (cache[sum]) {
      let den = 1;
      for (let ci of cnt) {
        den*= factorials[ci];
      }
      res+= factorials[7] / den;
    }
  }
  return res;
}

squareDigitChains();
