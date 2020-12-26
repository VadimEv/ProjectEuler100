function almostEquilateralTriangles() {
    var x = 2;
    var y = 1;
    const limit = 1000000000;
    var result = 0;
 
    while(true){
        // b = a+1
        var aTimes3 = 2 * x - 1;
        var areaTimes3 = y * (x - 2);
        if (aTimes3 > limit) break;

        if (aTimes3 > 0 && areaTimes3 > 0 && aTimes3 % 3 === 0 && areaTimes3 % 3 === 0) {
            result += aTimes3 + 1;
        }

        //b = a-1
        aTimes3 = 2 * x + 1;
        areaTimes3 = y * (x + 2);

        if (aTimes3 > 0 && areaTimes3 > 0 && aTimes3 % 3 == 0 && areaTimes3 % 3 == 0) {
            result += aTimes3 - 1;
        }

        var nextx = 2 * x + y * 3;
        var nexty = y * 2 + x;

        x = nextx;
        y = nexty;
    }
    return result
}

almostEquilateralTriangles();