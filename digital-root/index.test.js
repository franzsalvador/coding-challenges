const digitalRoot = require('./index')

describe('digitalRoot', () => {
  test('it should be a function ', () => {
    expect(typeof digitalRoot).toEqual('function')
  })
  test('it should return ', () => {
    expect(digitalRoot(16)).toBe(7)
  })
  test('it should return ', () => {
    expect(digitalRoot(942)).toBe(6)
  })
  test('it should return ', () => {
    expect(digitalRoot(132189)).toBe(6)
  })
  test('it should return ', () => {
    expect(digitalRoot(493193)).toBe(2)
  })
})
