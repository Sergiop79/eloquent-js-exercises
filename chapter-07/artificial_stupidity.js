function SmartPlantEater () {
  this.energy = 20
  this.direction = 's'
}

SmartPlantEater.prototype.act = function (view) {
  var space = view.find(' ')
  if (this.energy > 40 && space) {
    return { type: 'reproduce', direction: space }
  }

  var plant = view.find('*')
  if (plant) {
    return { type: 'eat', direction: plant }
  }

  if (view.look(this.direction) !== ' ') {
    this.direction = view.find(' ') || 's'
    return { type: 'move', direction: this.direction }
  }
}
