function monopolyOdds() {
    var s = new Int32Array(40);
    var k = 0; //current position
    var cc = 0;
    var ch = 0;
    var z = 0; //throw counter
    for (var n = 0; n < 1000000; n++) {
        var x1 = Math.floor(Math.random() * 4) + 1;
        var x2 = Math.floor(Math.random() * 4) + 1;
        k = (k + x1 + x2) % 40;
        if (x1 == x2) {
            z = z + 1;
            if (z >= 3) {
                k = 10;
                z = 0;
            }
        } else {
            z = 0;
        }
        if (k == 30) {
            k = 10;
        } else if (k == 2 || k == 17 || k == 33) {
            if (cc == 0) {
                k = 0;
            } else if (cc == 1) {
                k = 10;
            }
            cc = (cc + 1) % 16;
        } else if (k == 7 || k == 22 || k == 36) {
            if (ch == 0) {
                k = 0;
            } else if (ch == 1) {
                k = 10;
            } else if (ch == 2) {
                k = 11;
            } else if (ch == 3) {
                k = 24;
            } else if (ch == 4) {
                k = 39;
            } else if (ch == 5) {
                k = 5;
            } else if (ch == 6 || ch == 7) {
                k = (Math.floor((k + 5) / 10) * 10 + 5) % 40;
            } else if (ch == 8) {
                if (k >= 12 && k < 28) {
                    k = 28;
                } else {
                    k = 12;
                }
            } else if (ch == 8) {
                k = (k + 37) % 40;
            }
            ch = (ch + 1) % 16;
        }
        s[k] += 1;
    }
    var t = [];
    for (var i = 0; i < 40; i++) {
        t[i] = i;
    }
    for (var i = 0; i < 40 - 1; i++) {
        for (var j = i + 1; j < 40; j++) {
            if (s[i] < s[j]) {
                var tmp = s[i];
                s[i] = s[j];
                s[j] = tmp;
                tmp = t[i];
                t[i] = t[j];
                t[j] = tmp;
            }
        }
    }
    return Number(('0' + t[0]).slice(-2)
        + ('0' + t[1]).slice(-2)
        + ('0' + t[2]).slice(-2)); 
}

monopolyOdds();