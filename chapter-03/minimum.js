/* Write a function min that takes two arguments and returns their minimum. */

function min (a, b) {
  if (a < b) {
    return a
  }

  if (b < a) {
    return b
  }

  return a
}

console.log(min(5, 6)) // 5
console.log(min(1, 6)) // 1
console.log(min(8, 8)) // 8
