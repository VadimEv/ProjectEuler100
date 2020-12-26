function generateFactors(limit) {
    sumOfFactorsList = new Int32Array(limit+1);
    for (var i = 1; i < limit / 2 + 1; i++) {
        for (var j = 2 * i; j < limit +1; j += i) {
            sumOfFactorsList[j] += i;
        }
    }
    return sumOfFactorsList.reduce(function (a, b) { return a + b }, 1)
}
function amicableChains() {
    const limit = 1000000;
    var result = 0;
    var chainLength = 0;

    var numbers = new Int8Array(limit + 1); //1 for true 0 for false
    numbers[0] = numbers[1] = numbers[2] = 1;

    for (var i = 2; i < limit + 1; i++) {
        if (numbers[i]) continue;
        var chain = [];
        var newNumber = i;
        var broken = false;

        while (!chain.includes(newNumber)) {
            chain.push(newNumber);
            newNumber = generateFactors(newNumber);

            if (newNumber > limit || numbers[newNumber]) {
                broken = true;
                break;
            }
        }

        if (!broken) {
            var smallest = Number.MAX_SAFE_INTEGER;
            var first = chain.indexOf(newNumber);

            if (chain.length - first > chainLength) {
                for (var j = first; j < chain.length; j++) {
                    if (chain[j] < smallest) {
                        smallest = chain[j];
                    }
                }

                chainLength = chain.length - first;
                result = smallest;
            }
        }

        for (var j = 0; j < chain.length; j++) {
            numbers[chain[j]] = 1;
        }
    }
    return result
}

amicableChains();