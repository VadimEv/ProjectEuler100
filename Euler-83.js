function pathSumFourWays(arr) {
    var matr = [];
    for (var i = 0; i < arr.length; i++){
        matr[i] = arr[i];
    }
    var sum = []
    for (var i = 0; i < arr.length; i++) {
        sum[i] = [];
        for (var j = 0; j < arr.length; j++) {
            sum[i][j] = 1e100;
        }
    }
    sum[0][0] = matr[0][0]
    var cont
    do {
        cont = false;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (j - 1 >= 0 && sum[i][j] > sum[i][j - 1] + matr[i][j]) {
                    sum[i][j] = sum[i][j - 1] + matr[i][j];
                    cont = true;
                }
                if (j + 1 < arr.length && sum[i][j] > sum[i][j + 1] + matr[i][j]) {
                    sum[i][j] = sum[i][j + 1] + matr[i][j];
                    cont = true;
                }
                if (i - 1 >= 0 && sum[i][j] > sum[i - 1][j] + matr[i][j]) {
                    sum[i][j] = sum[i - 1][j] + matr[i][j];
                    cont = true;
                }
                if (i + 1 < arr.length && sum[i][j] > sum[i + 1][j] + matr[i][j]) {
                    sum[i][j] = sum[i + 1][j] + matr[i][j];
                    cont = true;
                }
            }
        }
    }while(cont);
    return sum[arr.length - 1][arr.length - 1]
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumFourWays(testMatrix);
