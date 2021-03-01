const caesar = require('./caesar');

it('Works with one word', () => {
  expect(caesar('avalanche', 3)).toBe('dydodqfkh')
})

it('Works with a negative shift', () => {
  expect(caesar('def', -2)).toBe('bcd')
})

it('Wraps z to a', () => {
  expect(caesar('zoo', 5)).toBe('ett')
})

it('Wraps a to z', () => {
  expect(caesar('abc', -5)).toBe('vwx')
})

it('Works with a capitals', () => {
  expect(caesar('ABC', 5)).toBe('FGH')
})

it('Wraps capitals Z to A', () => {
  expect(caesar('XYZ', 6)).toBe('DEF')
})

it('Wraps capitals A to Z', () => {
  expect(caesar('ABC', -4)).toBe('WXY')
})

it('Works with a phrase', () => {
  expect(caesar('public bus piss floor', 4)).toBe('tyfpmg fyw tmww jpssv')
})

it('Works with a punction', () => {
  expect(caesar('"So we beat on, boats against the current, borne back ceaslessly into the past."', 13)).toBe('"Fb jr orng ba, obngf ntnvafg gur pheerag, obear onpx prnfyrffyl vagb gur cnfg."')
})