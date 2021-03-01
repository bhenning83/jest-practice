const reverse = require('./reverse');

it('one word', () => {
  expect(reverse('moist')).toBe('tsiom')
})

it('longer string', () => {
  expect(reverse('So we beat on')).toBe('no taeb ew oS')
})