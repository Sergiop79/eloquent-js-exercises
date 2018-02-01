function Tiger () {
  this.energy = 40
  this.direction = 's'
  this.totalFood = []
}

Tiger.prototype.act = function (view) {
  var space = view.find(' ')

  var food = view.findAll('o')
  this.totalFood.push(food.length)

  var foodInTurns = this.totalFood.reduce(function (a, b) {
    return a + b
  }) / this.totalFood.length

  if (this.totalFood.length > 6) {
    this.totalFood.shift()
  }

  if (this.energy > 200 && space) {
    return { type: 'reproduce', direction: space }
  }

  if (food.length && foodInTurns > 0.25) {
    return { type: 'eat', direction: randomElement(food) }
  }

  if (view.look(this.direction) !== ' ') {
    this.direction = space || 's'
  }

  return { type: 'move', direction: this.direction }
}
