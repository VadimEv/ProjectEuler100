// The task is to thing largest Sum in triangle of numbers from top to bottom,
// We'll heavily abuse the fact that we don't need path, the sum will suffice
// main idea of algo is to reduce pyramid to sing number like this:
// let our pyramid be of 3 numbers like: A
//                                      B C
// If B > C we need A + B, else A + C, now lets map this to entire pyramid. It's that simple

function maximumPathSumII (triangle) {
  let input = [...triangle]
  // Due to JS nature of arrays, it's reference object, we need deep copy, i.e. copy elements not by reference
  // but by value
  let inputTriangle = JSON.parse(JSON.stringify(input))

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      inputTriangle[i][j] += (inputTriangle[i + 1][j] > inputTriangle[i + 1][j + 1]) ? inputTriangle[i + 1][j] : inputTriangle[i + 1][j + 1]
    }
  }
  console.log(inputTriangle)
  return inputTriangle[0][0]
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]]

maximumPathSumII(testTriangle)
