function arrayToList (array) {
  var list = {}
  for (var i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) {
      list = {
        value: array[i],
        rest: null
      }
    } else {
      list = {
        value: array[i],
        rest: list
      }
    }
  }

  return list
}

function listToArray (list) {
  var result = []
  for (var node = list; node; node = node.rest) {
    result.push(node.value)
  }

  return result
}

function prepend (val, list) {
  return {
    value: val,
    rest: list
  }
}

function nth (list, position) {
  return listToArray(list)[position]
}

console.log(arrayToList([10, 20])) // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))) // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))) // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)) // → 20
