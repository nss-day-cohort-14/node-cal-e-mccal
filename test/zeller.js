"use strict";

const { assert } = require('chai')
const {math, getMonth, getYear} = require('../lib/zeller')
const { expect } = require("chai");


describe('zeller', () => {
    describe('math', () => {
        it('should be a function', () => {
            assert.isFunction(math)
        })
        it('should return correct day of week', () => {
        const dateObj = {
          year: 1999,
          month: 5
        }
        assert.equal(math(dateObj), 6) //////This is returning the first date of the month
      })
      it('should return correct day of week', () => {
      const dateObj = {
        year: 2000,
        month: 7
      }
      assert.equal(math(dateObj), 6) //////This is returning the first date of the month
    })
    it('should return correct day of week', () => {
    const dateObj = {
      year: 2016,
      month: 9
    }
    assert.equal(math(dateObj), 4) //////This is returning the first date of the month
  })
  it('should return correct day of week', () => {
    const dateObj = {
      year: 2016,
      month: 2
    }
    assert.equal(math(dateObj), 1) //////This is returning the first date of the month
  })
    })
    describe('getMonth', () => {
          it('should be a function', () => {
              assert.isFunction(getMonth)
      })
        it('should be able to handle Jan', () => {
            assert.strictEqual(getMonth(1), 13)
      })
        it('should be able to handle Feb', () => {
            assert.strictEqual(getMonth(2), 14)
      })
        it('should be able to handle months march and after', () => {
            assert.strictEqual(getMonth(3), 3)
      })
        it('should be able to handle months march and after', () => {
            assert.strictEqual(getMonth(12), 12)
      })
    })
    describe('getYear', () => {
      it('should be a function', () => {
          assert.isFunction(getYear)
        })
      it('should be able to handle jan, 2000', () => {
          assert.strictEqual(getYear(1, 2000), 1999)
        })
      it('should be able to handle feb, 2000', () => {
          assert.strictEqual(getYear(2, 2000), 1999)
        })
      it('should be able to handle march, 2000', () => {
          assert.strictEqual(getYear(3, 2000), 2000)
        })
    })
})
