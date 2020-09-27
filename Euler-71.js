function orderedFractions() {
    var a = 3;
    var b = 7;
    var r = 0;
    var s = 1;
    var limit = 1000000;
 
    for (let q = limit; q > 2; q--) {
        var p = Math.floor((a * q - 1) / b);
        if ((p * s) > (r * q)) {
            s = q;
            r = p;
        }
    }
    
    return r;
}

orderedFractions();
