// Counts the number of ways we can give change with unlimited number of coins.
// I did it before here https://github.com/VadimEv/JSchunks/blob/master/exactChange.js
/* For example, let's have 50p, with 1p coins we have 1 way, pretty obvious.
   With 1p and 2p coins we have 1 (all with 1p) + 1 (all with 2p ) + 24 ways with different number of 2p coins, so 26
   With 1p 2p and 5p it's get a bit more shrouded:
   1 way is all 5p,
   next way is 9x 5p + 2 ways rest of 5p can be given with 1p and 2p,
   next way is 8x 5p + 6 ways rest of 10p can be given with 1p and 2p,
   next way is 7x 5p + 8 ways rest of 15p can be given with 1p and 2p,
   next way is 6x 5p + 11 ways rest of 15p can be given with 1p and 2p,
   rest is 13, 16, 18, 21 and 23, totaling 119 + 26 + 1 = 146
   Now we beggining to see the reqursion here, now let's algo this  */

function coinSums (n) {
  const target = n
  const coinSizes = [1, 2, 5, 10, 20, 50, 100, 200]
  // array of length of needed amount with 0, on eacg step we will populate each element starting from 1st
  var ways = [...Array(n + 1).keys()].map(i => 0)
  ways[0] = 1
  for (let i = 0; i < coinSizes.length; i++) {
    for (let j = coinSizes[i]; j <= target; j++) {
      ways[j] += ways[j - coinSizes[i]]
    }
  }
  return ways[target]
}

coinSums(50)
