function dice(f, n, c, p) {
    if (c == 6) {
        p(f);
        return;
    }
    for (var i = n; i < 10; i++) {
        f[i] = 1;
        dice(f, i + 1, c + 1, p);
        f[i] = 0;
    }
}


function cubeDigitPairs() {
    var f = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    var g = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    var x = 0;
    dice(f, 0, 0, function(ff) {
        dice(g, 0, 0, function(gg) {
            if (!(ff[0] && gg[1] || gg[0] && ff[1])) return;
            if (!(ff[0] && gg[4] || gg[0] && ff[4])) return;
            if (!(ff[0] && gg[6] || gg[0] && ff[6]) 
                && !(ff[0] && gg[9] || gg[0] && ff[9])) return;
            if (!(ff[1] && gg[6] || gg[1] && ff[6])
                && !(ff[1] && gg[9] || gg[1] && ff[9])) return;
            if (!(ff[1] && gg[8] || gg[1] && ff[8])) return;
            if (!(ff[2] && gg[5] || gg[2] && ff[5])) return;
            if (!(ff[3] && gg[6] || gg[3] && ff[6])
                && !(ff[3] && gg[9] || gg[3] && ff[9])) return;
            if (!(ff[4] && gg[6] || gg[4] && ff[6])
                && !(ff[4] && gg[9] || gg[4] && ff[9])) return;
            x += 1;
        });
    });
    return x / 2
}

cubeDigitPairs();