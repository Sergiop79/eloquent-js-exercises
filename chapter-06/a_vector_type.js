function Vector (x, y) {
  this.x = x
  this.y = y
}

Object.defineProperty(Vector.prototype, 'getX', {
  get: function () { return this.x }
})

Object.defineProperty(Vector.prototype, 'getY', {
  get: function () { return this.y }
})

Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
})

Vector.prototype.plus = function (vector) {
  return new Vector(this.getX + vector.x, this.getY + vector.y)
}

Vector.prototype.minus = function (vector) {
  return new Vector(this.getX - vector.x, this.getY - vector.y)
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length)
// → 5
