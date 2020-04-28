/* It's worth to take a cheet of paper and see what's really going on:
1. Let's call every right move R, every down move D
2. For 1x1 lattice it's going to be RD or DR, 2 paths
   For 2x2 lattice it's going to be RRDD, RDRD, DRRD, DDRR, DRDR and RDDR, 6 latticePaths
3. We can notice that for N*N grid, given only R/D moves path is always N*2
4. So we basically left with task how to put N Rs in N*2 slots, which is
5. Binomial coefficient, which can be easily calculated   */

function latticePaths (gridSize) {
  // Good luck!
  let paths = 1
  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i // a *= b <=> a = a * b, shorter notation
    paths /= i + 1
  }
  return paths
}

latticePaths(4)
