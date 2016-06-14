const _ = require('lodash')
const assert = require('assert')
const romanNumerals = requireLib('romanNumerals.js')

module.exports = {
  convertNumber: {},
  convertString: {}
}

_.each([
  { num: 1,
    output: 'I' },
  { num: 2,
    output: 'II' },
  { num: 5,
    output: 'V' },
  { num: 6,
    output: 'VI' },
  { num: 9,
    output: 'VIIII' },
  { num: 10,
    output: 'X' },
  { num: 11,
    output: 'XI' },
  { num: 15,
    output: 'XV' },
  { num: 16,
    output: 'XVI' }
], test => {
  module.exports.convertNumber[test.num + 'to' + test.output] = () => {
    assert.equal(romanNumerals.fromNumber(test.num), test.output)
  }
})

_.each([
  { str: 'I',
    output: 1 },
  { str: 'V',
    output: 5 },
  { str: 'VI',
    output: 6 },
  { str: 'X',
    output: 10 },
  { str: 'XI',
    output: 11 },
  { str: 'XV',
    output: 15 },
  { str: 'XVI',
    output: 16 }
], test => {
  module.exports.convertString[test.str + 'to' + test.output] = () => {
    assert.equal(romanNumerals.fromStr(test.str), test.output)
  }
})
