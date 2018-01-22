function range (start, finish) {
  var output = []
  for (var i = start; i <= finish; i++) {
    output.push(i)
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
