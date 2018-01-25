var arrays = [[1, 2, 3], [4, 5], [6]]

const c = console.log

c(
  arrays.reduce((prev, current) => prev.concat(current), [])
)
