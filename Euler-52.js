function Permute(a, b) {

    let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (a > 0) {
        cnt[a % 10]++;
        a = a / 10 | 0;
    }
    while (b > 0) {
        cnt[b % 10]--;
        b = b / 10 | 0;
    }
    return cnt.every(x => x === 0);
}

function permutedMultiples() {
  let start = 1
  let found = false
  let result = 1
  while (!found) {
      start *= 10
      for (let i = start; i < start * 10 / 6; i++) {
        found = true;
        for (let j = 2; j <= 6; j++) {
            if (!Permute(i, j * i)) {
                found = false;
                break;
            }
        }
        if (found) {
            result = i;
            break;
        }
    }
  }
  return result
}

permutedMultiples();
