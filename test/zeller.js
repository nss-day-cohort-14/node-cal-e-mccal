"use strict";

const { assert } = require('chai')
const {math, getMonth, getYear} = require('../lib/zeller')
const { expect } = require("chai");


describe('zeller', () => {
    describe('math', () => {
        it('should be a function', () => {
            assert.isFunction(math)
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
      it('should be able to handle', () => {
          assert.isFunction(getYear)
        })
      it('should be a function', () => {
          assert.isFunction(getYear)
        })
    })
})
