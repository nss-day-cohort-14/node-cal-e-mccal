const { isFunction, oneOf, assert } = require('chai').assert
const year = require('../lib/year')
const { expect } = require("chai");


describe("year", () => {
  describe('getYear', () => {
    it('should be a function', () => {
      isFunction(year.getYear)
    })
    it('will return a number', () => {
        var result = year.getYear()
        expect(result).to.be.a('number')
      })
  })
  describe('getYearJ', () => {
    it('should be a function', () => {
      isFunction(year.getYearJ)
    })
    it('will return a number', () => {
        var result2 = year.getYearJ()
        expect(result2).to.be.a('number')
    })
  })
})
