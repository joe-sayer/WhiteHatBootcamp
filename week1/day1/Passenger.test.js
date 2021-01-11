const { test, expect } = require('@jest/globals')
const { Passenger, jim } = require('./Passenger')

describe('Passenger', () => {
    test('check bags', () => {
        expect(jim.bags[0].weight).toEqual(15)
    })
    test('check name error', () => {
        expect(() => new Passenger()).toThrowError('name is required')
    })
})