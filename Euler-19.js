function countingSundays (firstYear, lastYear) {
  // you guessed it: months are indexed from 0
  let start = new Date(firstYear, 0)
  let finish = new Date(lastYear, 11, 31)
  let sundays = 0
  while (start <= finish) {
    if (start.getDay() === 0 && start.getDate() === 1) {
      sundays++
    }
    start.setDate(start.getDate() + 1)
  }
  return sundays
}

countingSundays(1943, 1946)
