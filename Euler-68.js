function magic5GonRing() {
    let p = [];
    let use = [];
    for (var i1 = 1; i1 <= 9; i1++) {
        use[i1] = 1;
        for (var i2 = 2; i2 <= 9; i2++) {
            if (use[i2]) continue;
            use[i2] = 1;
            for (var o1 = 2; o1 <= 10; o1++) {
                if (use[o1]) continue;
                m1 = o1 + i1 + i2;
                use[o1] = 1;
                for (var i3 = 2; i3 <= 9; i3++) {
                    if (use[i3]) continue;
                    use[i3] = 1;
                    for (var o2 = 2; o2 <= 10; o2++) {
                        if (use[o2]) continue;
                        m2 = o2 + i2 + i3;
                        if (m1 != m2) continue;
                        use[o2] = 1;
                        for (var i4 = 2; i4 <= 9; i4++) {
                            if (use[i4]) continue;
                            use[i4] = 1;
                            for (var o3 = 2; o3 <= 10; o3++) {
                            if (use[o3]) continue;
                            m3 = o3 + i3 + i4;
                            if (m1 != m3) continue;
                            use[o3] = 1;
                                for (var i5 = 2; i5 <= 9; i5++) {
                                if (use[i5]) continue;
                                use[i5] = 1;
                                for (var o4 = 2; o4 <= 10; o4++) {
                                    if (use[o4]) continue;
                                    m4 = o4 + i4 + i5;
                                    if (m1 != m4) continue;
                                    use[o4] = 1;
                                    for (var o5 = 2; o5 <= 10; o5++) {
                                        if (use[o5]) continue;
                                        m5 = o5 + i5 + i1;
                                        if (m1 != m5) continue;
                                        p[p.length] = [m1,o1,o2,o3,o4,o5,i1,i2,i3,i4,i5];
                                    }
                            use[o4] = 0;
                            }
                        use[i5] = 0;
                        }
                    use[o3] = 0;
                    }
                use[i4] = 0;
                }
          use[o2] = 0;
        }
        use[i3] = 0;
      }
      use[o1] = 0;
    }
    use[i2] = 0;
  }
  use[i1] = 0;
}

var max = 0;
for (var i = 0; i < p.length; i++) {
  var m1 = "" + p[i][1] + p[i][6] + p[i][7];
  var m2 = "" + p[i][2] + p[i][7] + p[i][8];
  var m3 = "" + p[i][3] + p[i][8] + p[i][9];
  var m4 = "" + p[i][4] + p[i][9] + p[i][10];
  var m5 = "" + p[i][5] + p[i][10] + p[i][6];
  var o = 10;
  var min = 1e16;
  if (p[i][1] < o) o = p[i][1], min = m1 + m2 + m3 + m4 + m5 - 0;
  if (p[i][2] < o) o = p[i][2], min = m2 + m3 + m4 + m5 + m1 - 0;
  if (p[i][3] < o) o = p[i][3], min = m3 + m4 + m5 + m1 + m2 - 0;
  if (p[i][4] < o) o = p[i][4], min = m4 + m5 + m1 + m2 + m3 - 0;
  if (p[i][5] < o) o = p[i][5], min = m5 + m1 + m2 + m3 + m4 - 0;
  if (min > max) max = min;
}
    return max
}

magic5GonRing();