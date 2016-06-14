const assert = require('assert')

const sample = requireLib('sample.js')

module.exports = {
  funTdd: () => {
    assert(sample.isTddFun())
  }
}
