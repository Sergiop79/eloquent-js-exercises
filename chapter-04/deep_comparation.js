function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function deepEqual (a, b) {
  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (let key in a) {
      if (!(key in b) || !deepEqual(a[key], b[key])) {
        return false
      }
    }

    for (let key in b) {
      if (!(key in a) || !deepEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  } else {
    return a === b
  }
}

var obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj)) // → true
console.log(deepEqual(obj, { here: 1, object: 2 })) // → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 })) // → true

var obj2 = {name: 'Jhon', age: 33, contact: {email: 'john@example.com', phone: '555-444-333'}}
console.log(deepEqual(obj2, { here: 1, object: 2 })) // → false
console.log(deepEqual(obj2, { name: 'Jhon', age: 33, contact: { email: 'john@example.com', phone: '555-444-333' } })) // → true
