const { isFunction, oneOf } = require('chai').assert
const { expect } = require("chai");
const { getMonth } = require('../lib/month')
describe('month', () => {
  describe('getMonth', () => {
    it('should be a function', () => {
      isFunction(getMonth)
    })
  })
  it('should return a number between 0 and 11', () => {
      let test = getMonth()
      expect(test).to.be.oneOf([0,1,2,3,4,5,6,7,8,9,10,11]);

  })
})
