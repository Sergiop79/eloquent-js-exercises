/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.
*/

function countBs (str) {
  var count = 0

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    if (char !== -1 && char === 'B') {
      count++
    }
  }

  return count
}

function countChar (str, charToCount) {
  var count = 0

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i)
    if (char !== -1 && char === charToCount) {
      count++
    }
  }

  return count
}

console.log(countBs('BBC')) // 2
console.log(countChar('kakkerlak', 'k')) // 4
