const ancestry = JSON.parse(require('./ancestry'))

const plus = (a, b) => a + b

const average = array => array.reduce(plus) / array.length

const byName = {}

ancestry.forEach(person => {
  byName[person.name] = person
})

const differences = ancestry.map(person => {
  let mother = byName[person.mother]
  return mother ? person.born - mother.born : null
})
.filter(x => x !== null)

console.log(average(differences).toFixed(1)) // 31.2
