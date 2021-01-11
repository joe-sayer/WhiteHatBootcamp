const { test, expect } = require('@jest/globals')
const { testBag, Bag } = require('./Bag')

describe('Bag', () => {
    test('checkWeight', () => {
        expect(() => new Bag()).toThrowError('must have a weight')
    })

    test('checkWeight', () => {
        expect(testBag.weight).toEqual(10)
    })
})