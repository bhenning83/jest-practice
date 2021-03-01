const { it, expect } = require('@jest/globals')
const analyze = require('./analyze')

it('simple array', () => {
  expect(analyze([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  })
})

it('Works with floats', () => {
  expect(analyze([2, 3, 4, 5])).toEqual({
    average: 4,
    min: 2,
    max: 5,
    length: 4
  })
})
