function gcd (a, b) {
    if (!b) { return a }
        return gcd(b, a % b)
}

function rightTrianglesIntCoords() {
    const size = 50;
    var result = size * size * 3;
    for (var x = 1; x < size + 1; x++) {
        for (var y = 1; y < size + 1; y++) {
            var fact = gcd(x, y);
            result += 2 * Math.floor(Math.min(y * fact / x, (size - x) * fact /y));
        }
    }
    return result
}

rightTrianglesIntCoords();