function powerfulDigitCounts() {
  let result = 0
  let low = 0
  let n = 1
  
  while (low < 10) {
    low = Math.ceil(Math.pow(10,(n - 1)/n))
    result += 10 - low
    n++  
  }
  return result    
}

powerfulDigitCounts();
