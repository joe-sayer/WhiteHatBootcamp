const { test, expect } = require('@jest/globals')
const { Passenger, jim } = require('./Passenger')

describe('Passenger', () => {
    test('check bags', () => {
        expect(jim.bags[0]).toEqual(1)
        expect(jim.bags[1]).toEqual(15)
        expect(jim.bags[2]).toEqual(25)
    })
    test('check name error', () => {
        expect(() => new Passenger()).toThrowError('name is required')
    })
})