function cuboidRoute() {
    var l = 2;
    var count = 0;
    var target = 1000000;

    while (count < target) {
        l++;
        for (var wh = 3; wh < 2 * l + 1; wh++) {
            var sqrt = Math.sqrt(wh * wh + l * l);                    
            if (sqrt == Math.floor(sqrt)) {
                count += (wh < l + 1) ? wh / 2 : 1 + (l - (wh + 1) / 2);
            }
        }
    }
    return l
}

cuboidRoute();