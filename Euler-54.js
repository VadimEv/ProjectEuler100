function score(p) {
  var st = "23456789TJQKA";
  var v = [];
  var s = [];
  for (var i = 0; i < p.length; i++) {
    v.push(st.indexOf(p[i].charAt(0)));
    s.push(p[i].charAt(1));
  }
  v.sort(function(a, b) { return b - a; });
  var flash = s[0] == s[1] && s[0] == s[2] &&
    s[0] == s[3] && s[0] == s[4];
  if (v[0] == st.indexOf('A') && v[1] == st.indexOf('K') &&
    v[2] == st.indexOf('Q') && v[3] == st.indexOf('J') &&
    v[4] == st.indexOf('T') && flash) {
    return [9];
  }
  if (v[0] == (v[1]  + 1) % 13 && v[0] == (v[2] + 2) % 13 &&
    v[0] == (v[3] + 3) % 13 && v[0] == (v[4] + 4) % 13) {
    if (flash) {
      return [8, v[0]];
    }
    return [4, v[0]];
  }
  if (v[0] == v[1] && v[1] == v[2] && v[2] == v[3]) {
    return [7, v[0], v[4]];
  }
  if (v[1] == v[2] && v[2] == v[3] && v[3] == v[4]) {
    return [7, v[1], v[0]];
  }
  if (v[0] == v[1] && v[1] == v[2] && v[3] == v[4]) {
    return [6, v[0], v[3]];
  }
  if (v[2] == v[3] && v[3] == v[4] && v[0] == v[1]) {
    return [6, v[2], v[0]];
  }
  if (flash) {
    return [5].concat(v);
  }
  if (v[0] == v[1] && v[1] == v[2]) {
    return [3, v[0], v[3], v[4]];
  }
  if (v[1] == v[2] && v[2] == v[3]) {
    return [3, v[1], v[0], v[4]];
  }
  if (v[2] == v[3] && v[3] == v[4]) {
    return [3, v[2], v[0], v[1]];
  }
  if (v[0] == v[1] && v[2] == v[3]) {
    return [2, v[0], v[2], v[4]];
  }
  if (v[0] == v[1] && v[3] == v[4]) {
    return [2, v[0], v[3], v[2]];
  }
  if (v[1] == v[2] && v[3] == v[4]) {
    return [2, v[1], v[3], v[0]];
  }
  if (v[0] == v[1]) {
    return [1, v[0], v[2], v[3], v[4]];
  }
  if (v[1] == v[2]) {
    return [1, v[1], v[0], v[3], v[4]];
  }
  if (v[2] == v[3]) {
    return [1, v[2], v[0], v[1], v[4]];
  }
  if (v[3] == v[4]) {
    return [1, v[3], v[0], v[1], v[2]];
  }
  return [0].concat(v);
}

function pokerHands(arr) {
    var w1 = 0;
    var w2 = 0;
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i].split(' ');
        var p1 = a.slice(0, 5);
        var p2 = a.slice(5, 10);
        var s1 = score(p1);
        var s2 = score(p2);
        var n = 0;
        for (;;) {
        if (Number(s1[n]) > Number(s2[n])) {
            w1 += 1;
            break;
        }
        if (Number(s1[n]) < Number(s2[n])) {
            w2 += 1;
            break;
        }
        n++;
        }
    }
    return w1
}

const testArr = [
  '8C TS KC 9H 4S 7D 2S 5D 3S AC',
  '5C AD 5D AC 9C 7C 5H 8D TD KS',
  '3H 7H 6S KC JS QH TD JC 2D 8S',
  'TH 8H 5C QS TC 9H 4D JC KS JS',
  '7C 5H KC QH JD AS KH 4C AD 4S'
];

pokerHands(testArr);