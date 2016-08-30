const zeller = require('../lib/zeller.js')


const {
    isFunction, deepEqual
} = require('chai').assert;



describe('zeller', () => {
    it("should be a function", () => {
        isFunction(zeller)
    })
    it('should handle no arguments', () => {
        const args = []
        const expected = {
            count: 1,
            sides: 6
        }
        deepEqual(zeller(args), expected)
    })
    it('should handle one arguments', () => {
        const args = [0]
        const expected = {
            count: 0,
            sides: 1
        }
        deepEqual(zeller(args), expected)
    })
    it('should handle two arguments', () => {
        const args = [0, 1]
        const expected = {
            count: 0,
            sides: 1
        }
        deepEqual(zeller(args), expected)
    })
})
