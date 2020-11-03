function pathSumTwoWays(arr) {
    var len = arr.length
    
    for (var i = len - 2; i > -1; i--) {
        arr[len - 1][i] += arr[len - 1][i + 1];
        arr[i][len - 1] += arr[i+1][len - 1];
    }
 
    for (var i = len - 2; i > -1; i--) {
        for (var j = len - 2; j > -1; j--) {
            arr[i][j] += Math.min(arr[i + 1][j], arr[i][j + 1]);
        }
    }
    return arr[0][0]
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumTwoWays(testMatrix);
