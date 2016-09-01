const { assert } = require('chai')
const {checkMonth, monthToString, setHeader} = require('../lib/month')
const { expect } = require("chai");

describe('month', () => {
    describe('checkMonth', () => {
        it('should be a function', () => {
            assert.isFunction(checkMonth)
        })
        it('should return the number from Zeller', () => {
            assert.deepEqual(checkMonth(2), 14);
        })
      })
      describe('monthToString', () => {
          it('should be a function', () => {
              assert.isFunction(monthToString)
          })
          it('should return a string for a given month number', () => {
            value = monthToString(13)
              expect(value).to.equal("January")
          })
          it('should return a string for a given month number', () => {
            value = monthToString(3)
              expect(value).to.equal("March")
          })
        })
      describe('setHeader', () => {
          it('should be a function', () => {
              assert.isFunction(setHeader)
          })
          it('will return a string value', () => {
            var value = setHeader();
            assert.isString(value);
          })
          it('should include Su for sunday', () => {
            value = setHeader()
            expect(value).to.include("Su")
          })
          it('should include Fr for Friday', () => {
            value = setHeader()
            expect(value).to.include("Fr")
          })
        })
})
