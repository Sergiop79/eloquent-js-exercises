const ancestry = JSON.parse(require('./ancestry'))

const plus = (a, b) => a + b

const average = array => array.reduce(plus, 0) / array.length

const liveSpectation = {}

const getCentury = person => Math.ceil(person.died / 100)

ancestry.forEach(person => {
  let century = getCentury(person)
  let age = person.died - person.born

  if (liveSpectation[century]) {
    liveSpectation[century].push(age)
  } else {
    liveSpectation[century] = [age]
  }
})

for (let century in liveSpectation) {
  let age = average(liveSpectation[century]).toFixed(1)
  console.log(`${century}: ${age}`)
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
