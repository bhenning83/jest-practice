const calculator = require('./calculator');

it('Adds', () => {
  expect(calculator.add(5, 9)).toBe(14)
})

it('Adds Negatives', () => {
  expect(calculator.add(-4, -5)).toBe(-9)
})

it('Subtracts', () => {
  expect(calculator.subtract(11, 5)).toBe(6)
})

it('Subtracts Negatives', () => {
  expect(calculator.subtract(-4, -6)).toBe(2)
})

it('Multiplies', () => {
  expect(calculator.mult(11, 5)).toBe(55)
})

it('Multiplies Negatives', () => {
  expect(calculator.mult(-10, 5)).toBe(-50)
})

it('Multiplies with 0', () => {
  expect(calculator.mult(83, 0)).toBe(0)
})

it('Divides', () => {
  expect(calculator.div(60, 5)).toBe(12)
})

it('Divides with a negative denominator', () => {
  expect(calculator.div(60, -5)).toBe(-12)
})

it('Divides with a negative numerator', () => {
  expect(calculator.div(-60, 5)).toBe(-12)
})

it('Returns Infinity with 0 in denominator', () => {
  expect(calculator.div(18, 0)).toEqual(Infinity)
})
