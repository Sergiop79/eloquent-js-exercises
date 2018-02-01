var box = {
  locked: true,
  unlock: function () { this.locked = false },
  lock: function () { this.locked = true },
  _content: [],
  get content () {
    if (this.locked) {
      throw new Error('Locked!')
    }
    return this._content
  }
}

function withBoxUnlocked (body) {
  try {
    if (!box.locked) {
      body()
    }
    box.unlock()
  } catch (error) {
    console.log(error.message)
  } finally {
    box.locked = true
  }
}

withBoxUnlocked(function () {
  box.content.push('gold piece')
})

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!')
  })
} catch (e) {
  console.log('Error raised:', e)
}
console.log(box.locked)
// → true
