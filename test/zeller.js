'use strict'

const {
    isFunction, oneOf
} = require('chai').assert
const zeller = require('../lib/zeller')

describe('zeller', () => {
    describe('math', () => {
        it("should be a function", () => {
            isFunction(math)
        })
    })
    describe('math', function() {
        it('should include a today', () => {
            let today = ''
            oneOf(math(), [math(today)])
        })
    })
    describe('math', function() {
        it('should include q', () => {
            let q = ''
            oneOf(math(), [math(q)])
        })
    })
    describe('math', function() {
        it('results should be under 7', () => {

            oneOf(math(), [(5)])
        })
    })
})
