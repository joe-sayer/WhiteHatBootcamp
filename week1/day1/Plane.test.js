const { test, expect } = require('@jest/globals')
const { plane1 } = require('./Plane')

describe('Plane', () => {
    test('check destination', () => {
        expect(plane1.destination).toEqual('Heathrow')
    })
})