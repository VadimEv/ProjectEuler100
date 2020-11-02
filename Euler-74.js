function FacSum(n){
    const f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    var temp = n;
    var facsum = 0;
 
    while (temp > 0) {
        facsum += f[temp % 10];
        temp = Math.floor(temp / 10);
    }
    return facsum;
}

function digitFactorialChains() {
    var result = 0;
    const limit = 1000000;
    for (var i = 1; i < limit + 1; i++) {
        var n = i;
        var last = 0;
        var count = 0;
        while (n != last && n != 169 && n != 363601 && n != 1454 && n != 871 && n != 45361 && n != 872 && n != 45362){
                last = n;
                n = FacSum(n);
                count++;
        }
        if (count == 57 && (n == 169 || n == 363601 || n == 1454)){
            result++
        };
    }
    return result
}

digitFactorialChains();
