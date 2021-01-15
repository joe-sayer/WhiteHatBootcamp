const Battery = require('../src/Battery')

describe('Battery,', () => {
    test('working constructor', () => {
        expect(() => new Battery(5).toBeInstanceOf(Battery))
    })
})