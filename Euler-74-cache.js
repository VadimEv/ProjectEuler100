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
    const limit = 1000000;            
    var result = 0;
    var seqlengths = new Int32Array(limit + 1);
    seqlengths[169] = 3;
    seqlengths[363601] = 3;
    seqlengths[1454] = 3;
    seqlengths[871] = 2;
    seqlengths[45361] = 2;
    seqlengths[872] = 2;
    seqlengths[45362] = 2;

    for (var i = 1; i < limit + 1; i++) {
        let n = i;                
        let count = 0;
        let seq = [];
        seq.push(0);

        while (seq[seq.length - 1] != n) {                    
            seq.push(n);
            n = FacSum(n);
            count++;

            if ((n < (limit + 1)) && (seqlengths[n] > 0)){
                count += seqlengths[n];
                break;
            }
        }
        if (count == 60) result++;

        for (var j = 1; j < seq.length; j++) {
            if (seq[j] < limit + 1) {
                seqlengths[seq[j]] = count;                    
                count--;
            }
        }
    }
    return result
}

digitFactorialChains();