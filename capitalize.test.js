const { expect, it } = require('@jest/globals');
const capitalize = require('./capitalize');

it('one word', () => {
  expect(capitalize('moist')).toBe('Moist')
})

it('two words', () => {
  expect(capitalize('very moist')).toBe('Very moist')
})