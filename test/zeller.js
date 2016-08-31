"use strict";

// const { exec } = require("child_process");
const {
    isFunction, oneOf, assert
} = require('chai').assert
const zeller = require('../lib/zeller')
const {
    expect
} = require("chai");


describe('zeller', () => {
    describe('math', () => {
        it('should be a function', () => {
            isFunction(math)
        })
    })
    describe('math', () => {
        it('is below 7', () => {
            var result = math()
            expect(result).to.be.below(7); /////This is under the amount of days available(7)
        })
    })
    describe('math', () => {
        it('is above 0', () => {
            var result = math()
            expect(result).to.be.above(0);
        })
    })
    describe('math', () => {
        it('will return a number', () => {
            var result = math()
            assert.isNumber(result, 'how many cups');
        })
    })
})
