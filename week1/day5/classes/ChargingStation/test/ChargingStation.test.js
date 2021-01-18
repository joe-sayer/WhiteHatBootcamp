const ChargingStation = require('../src/ChargingStation')

describe('ChargingStation', () => {
    test('working constructor', () => {
        let testCS = new ChargingStation(1)
        expect(testCS.id).toEqual(1)
    })

    test('failing constructor', () => {
        expect(() => new ChargingStation()).toThrow('ChargingStation must be assigned an ID')
    })

    test('charge function', () => {
        let testCS = new ChargingStation(1)
        expect(testCS.charge()).toBeDefined()
    })
})