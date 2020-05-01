function numberLetterCounts (limit) {
  const word = []
  const OneThousand = 1000
  const OneMillion = 1000000
  // const OneBillion = 1000000000
  // const OneTrillion = 1000000000000
  // const OneQuadrillion = 1000000000000000
  // const OneQuintillion = 1000000000000000000
  const dict = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    OneThousand: 'thousand',
    OneMillion: 'million'
  }

  function processTens (a) {
    const numberOfTens = 10 * Math.floor(a / 10)
    const remainder = a % 10
    return (a < 21) ? dict[a] : dict[numberOfTens] + dict[remainder]
  }
  function processHundreds (b) {
    const numberOfHundreds = Math.floor(b / 100)
    const remainder = b % 100
    return remainder === 0 ? dict[numberOfHundreds] + dict[100] : dict[numberOfHundreds] + dict[100] + 'and' + processTens(remainder)
  }
  function processThousands (c) {
    const numberOfBase = Math.floor(c / OneThousand)
    const remainder = c % OneThousand
    return (remainder === 0) ? dict[numberOfBase] + dict.OneThousand
      : (numberOfBase < 100) ? processTens(numberOfBase) + dict.OneThousand + 'and' + processHundreds(remainder)
        : processHundreds(numberOfBase) + dict.OneThousand + 'and' + processHundreds(remainder)
  }
  function convert2word (number) {
    if (number < 0) { return 'negative ' + convert2word(Math.Abs(number)) }
    // if between 1 and 19 use dict
    else if (number >= 0 && number < 20) { return dict[number]}
    // if between 20 and 99, convert tens to word then recurse
    else if (number >= 20 && number < 100) { return processTens(number) }
    // if between 100 and 999, convert hundreds to word then recurse
    else if (number >= 100 && number < OneThousand) { return processHundreds(number) }
    else { return processThousands(number) }
  }
  for (let i = 1; i < limit + 1; i++) {
    word.push(convert2word(i))
  }
  return word.join('').length
}

numberLetterCounts(5)
