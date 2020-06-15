/* obs1: d4d5d6 must be divisuble by 5 => d6 must be 0 or 5
   obs2: d6d7d8 must be divisible by 11 and d6 is either 5 or 0 this leaves us
   (011, 022... 099), not pandigital, so d6 is 5
   obs3: d6 is 5 so d6d7d8 must be divisible by 11 which gives (506, 517, 528, 539, 561, 572, 583, 594)
   obs4: d7d8d9 now limited to 8 combinations of d7d8 from obs3, and eliminating
   repeted digits we left with only 4: (5286, 5390, 5728, 5832) which are divisible by 13
   obs5: now lets construct d6d7d8d9d10, thus gives us 3 possible pandigital endings:
   (52867, 53901, 57289)
   obs6: d5d6d7 must be divisible by 7 and end with 67, 01 or 89 so the ending sequence is
   d5d6d7d8d9d10 (952867, 357289)
   obs7: d2d3d4 must be divisible by 2 this yeilds d4 being even this gives us four possibilities
   and removing ones with repeated digits we have (0952867, 4952867, 0357289, 4357289, 6357289)
   obs8: d3d4d5 must be divisible by 3 and end with 09, 49, 03, 43, 63
   this gives us (30952867, 60357289, 06357289)
   obs9: d1 d2 has no restarains so... of all pandigital numbers we left with 2 only:
   14 and 41, so finally we can make entire numbers:
*/
function substringDivisibility () {
  // Good luck!
  const arr = []
  arr.push(1430952867)
  arr.push(4130952867)
  arr.push(1460357289)
  arr.push(4160357289)
  arr.push(1406357289)
  arr.push(1406357289)
  arr.sort()
  return arr
}

substringDivisibility()
