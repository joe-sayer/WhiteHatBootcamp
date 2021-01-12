const { test, expect } = require('@jest/globals')
const { Airport, barcelona } = require('./Airport')
const fs = require('fs')

describe('Airport', () => {
    test('check flight id', () => {
        expect(barcelona.planes[0].flightId).toEqual('HEA001')
    })

    test('check flight destination', () => {
        expect(barcelona.planes[0].destination).toEqual('Heathrow')
    })

    test('check passenger luggage', () => {
        expect(barcelona.planes[0].passengers[0].bags[0].weight).toEqual(15)
    })

    test('check name input for instance creation', () => {
        expect(() => new Airport()).toThrowError('name required')
    })

    test('airports have a city', () => {
        const CDG = new Airport('CDG')
        return CDG.getInfo()
            .then(info => {
                expect(info.city).toEqual('Paris')
            })
            .catch(err => {
                expect(err).toBeNull()
            })
    })
})