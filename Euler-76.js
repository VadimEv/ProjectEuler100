function countingSummations() {
    const target = 100;
    const ways = new Int32Array(target + 1);
    
    ways[0] = 1;
 
    for (var i = 1; i < target; i++) {
    for (var j = i; j < target + 1; j++) {
        ways[j] += ways[j - i];
        }
    }
    return ways[target];
}

countingSummations();