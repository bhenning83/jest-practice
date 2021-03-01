function analyze(array) {
  let avg = Math.round(array.reduce((a, b) => (a + b)) / array.length);
  return ({
    average: avg,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  })
}

let a = analyze([1, 2, 3])
console.log(a)

module.exports = analyze