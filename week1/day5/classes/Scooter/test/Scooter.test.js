const Scooter = require('../src/Scooter')

describe('Scooter', () => {
    test('working constructor', () => {
        let testScooter = new Scooter(1,150)
        expect(testScooter.id).toEqual(1)
        expect(testScooter.battery.capacity).toEqual(150)
    })

    test('throw error when id not given', () => {
        expect(() => new Scooter().toThrow('Scooter must be assigned an ID'))
    })

    test('useScooter method', () => {
        let testScooter = new Scooter(1, 150)
        testScooter.useScooter(50)
        expect(testScooter.battery.currentCharge).toEqual(100)
    })

    test('useScooter method - fail, too much battery charge used', () => {
        let testScooter = new Scooter(1, 150)
        expect(() => testScooter.useScooter(200)).toThrow('Not enough charge in battery.')
    })

    test('showInfo method is defined', () => {
        let testScooter = new Scooter(1, 150)
        expect(() => testScooter.showInfo()).toBeDefined()
    })
})