function reverseArray (array) {
  var result = []

  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }

  return result
}

function reverseArrayInPlace (array) {
  var halfLength = Math.floor(array.length / 2)
  for (var i = 0; i <= halfLength; i++) {
    var temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }

  return array
}

var arrayValue = ['A', 'B', 'C']
console.log(reverseArray(arrayValue)) // [ 'C', 'B', 'A' ]
var arrayValue2 = [1, 2, 3, 4, 5]
console.log(reverseArrayInPlace(arrayValue2)) // [5, 4, 3, 2, 1]
console.log(arrayValue2) // [5, 4, 3, 2, 1]
