const User = require('../src/User')

describe('User', () => {
    test('working constructor', () => {
        expect(() => new User('Joe').toBeInstanceOf(User))
    })

    test('constructor throw error when name not defined', () => {
        expect(() => new User().toThrowError('Name is required'))
    })

    test('useScooter function to throw error when no scooter is present', () => {
        expect(() => new User('Joe').useScooter().toThrowError('User does not currently have a scooter.'))
    })
})