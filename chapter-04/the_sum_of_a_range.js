function range (start, finish, step) {
  var output = []
  step = step || 1

  if (step < 0) {
    for (var i = start; i >= finish; i += step) {
      output.push(i)
    }
  } else {
    for (var j = start; j <= finish; j += step) {
      output.push(j)
    }
  }

  return output
}

function sum (array) {
  var result = 0
  for (var i = 0; i < array.length; i++) {
    result += array[i]
  }

  return result
}

console.log(range(1, 10)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(sum(range(1, 10))) // 55
console.log(range(5, 2, -1)) // → [5, 4, 3, 2]
