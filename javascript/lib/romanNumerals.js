const _ = require('lodash')

const ROMAN_CHARACTERS = {
  'X': 10,
  'V': 5,
  'I': 1
}

const romanDiv = (value, romanChar, divisor) => {
  return _.repeat(romanChar, value / divisor)
}

const fromNumber = num => {
  var romanStr = ''

  _.reduce(ROMAN_CHARACTERS, (currentValue, divisor, romanChar) => {
    romanStr += romanDiv(currentValue, romanChar, divisor)
    return currentValue % divisor
  }, num)

  return romanStr
}

const fromStr = str => _.sum(_.map(str.split(''), chr => ROMAN_CHARACTERS[chr]))

module.exports = {
  fromNumber: fromNumber,
  fromStr: fromStr
}
