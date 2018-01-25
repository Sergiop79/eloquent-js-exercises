const everyAux = (array, fn, index) => {
  return array.length - 1 < index
    ? true
    : fn(array[index])
      ? everyAux(array, fn, index + 1)
      : false
}

const every = (array, fn) => {
  return everyAux(array, fn, 0)
}

const someAux = (array, fn, index) => {
  return array.length - 1 < index
    ? false
    : fn(array[index])
      ? true
      : someAux(array, fn, index + 1)
}

const some = (array, fn) => {
  return someAux(array, fn, 0)
}

console.log(every([NaN, NaN, NaN], isNaN))
// → true
console.log(every([NaN, NaN, 4], isNaN))
// → false
console.log(some([NaN, 3, 4], isNaN))
// → true
console.log(some([2, 3, 4], isNaN))
// → false
