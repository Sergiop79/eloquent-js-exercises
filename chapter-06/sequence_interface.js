function RangeSeq (from, to) {
  this.iterator = () => {
    let i = from
    return {
      next: () => i++,
      done: () => i > to
    }
  }
}

function ArraySeq (array) {
  this.iterator = () => {
    let i = 0
    return {
      next: () => array[i++],
      done: () => i >= array.length
    }
  }
}

function logFive (sequence) {
  let it = sequence.iterator()
  let n = 5

  while (n--) {
    if (!it.done()) {
      console.log(it.next())
    } else {
      break
    }
  }
}

logFive(new ArraySeq([1, 2]))
// → 1
// → 2
logFive(new RangeSeq(100, 1000))
// → 100
// → 101
// → 102
// → 103
// → 104