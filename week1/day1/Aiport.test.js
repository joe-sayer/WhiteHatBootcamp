const { test, expect } = require('@jest/globals')
const { Aiport, barcelona } = require('./Airport')

describe('Airport', () => {
    test('check flight id', () => {
        expect(barcelona.planes[0].flightId).toEqual('HEA001')
    })
    test('check flight destination', () => {
        expect(barcelona.planes[0].destination).toEqual('Heathrow')
    })
    test('check flight destination', () => {
        expect(barcelona.planes[0].passengers[0].bags[0].weight).toEqual(15)
    })
})