function wordToNum (s) {
  const dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  return s.toLowerCase().split('').map((x) => dict[x]).reduce(function (a, b) { return a + b })
}
function bubbleSort (array) {
  var changed = true

  while (changed) {
    changed = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        // swap those numbers
        var temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
        changed = true
      }
    }
  }
  return array
}
function namesScores (arr) {
  const sorted = bubbleSort(arr)
  const nums = sorted.map((x) => wordToNum(x))
  return nums.map((x, index) => { return x * (index + 1) }).reduce((a, b) => a + b)
  // fancy one-liner goes here by U
}

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST']
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST']

namesScores(test1)
namesScores(test2)
