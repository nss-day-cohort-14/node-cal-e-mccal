"use strict";

// const { exec } = require("child_process");
const {
    isFunction, oneOf, assert, isNumber
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
            isNumber(result, 'q');
        })
    })
    describe('today', () => {
        it('will include monday', () => {
            let today = 1

            oneOf(today, [0, 1, 2]);
        })
    })
})









// June 2016
// Starts on wednesday
// 31 days
// 5 weeks

// Sept 2016
// Starts on thursday
// 30 days
// 5 weeks

// Feb 2016
// starts on monday
// 29 days
// 5 weeks

// Feb 2014
// starts on saturday
// 28 days
// 5 weeks

// Feb 2015
// starts on sunday
// 28 days
// 4 weeks

// Jan 2016
// starts on friday
// 31 days
// 6 weeks

// Nov 2014
// starts on saturday
// 30 days
// 6 weeks

// Feb 1900
// starts on thursday
// 28 days (non-leap century)
// 5 weeks

// Feb 2000
// starts on tuesday
// 29 days (leap century)
// 5 weeks

// node-cal 1752 // cal: year 1752 not in range 1753..9999
// node-cal 10000 // cal: year 10000 not in range 1753..9999
// node-cal 13 2015 // cal: month 13 not in range 1..12
