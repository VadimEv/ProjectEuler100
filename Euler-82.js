function pathSumThreeWays(arr) {
    var len = arr.length
    var solution = new Int32Array(len)
    
    for (var i = 0; i < len; i++) {
        solution[i] = arr[i][len - 1];
    }
    
    for (var i = len - 2; i > -1; i--) {
        // go down
        solution[0] += arr[0][i];
        for (var j = 1; j < len; j++) {
            solution[j] = Math.min(solution[j - 1] + arr[j][i], solution[j] + arr[j][i]);
        }
 
        //go up
        for (var j = len - 2; j > -1; j--) {
            solution[j] = Math.min(solution[j], solution[j+1] + arr[j][i]);
        }
    }
    
    return Math.min(...solution)
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumThreeWays(testMatrix);
