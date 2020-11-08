function countingRectangles() {
    var error = Number.MAX_SAFE_INTEGER;
    var closestarea = 0;
    var target = 2000000;

    var x = 2000;
    var y = 1;

    while (x + 1 > y) {
        var rects = x * (x + 1) * y * (y + 1) / 4;

        if (error > Math.abs(rects - target)) {
            closestarea = x * y;
            error = Math.abs(rects - target);
        }

        if (rects > target){
            x--;
        } else {
            y++;
        }
    }
    return closestarea
}

countingRectangles();
