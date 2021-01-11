const { Bag } = require('./Bag')
const { Passenger } = require('./Passenger')
const { Plane } = require('./Plane')



class Airport {
    constructor(name) {
        if(!name) {
            throw new Error('name required')
        }
        this.name = name
        this.planes = []
    }

    addPlane(plane) {
        this.planes.push(plane)
    }
}

const barcelona = new Airport('Barcelona')
const testPlane = new Plane('Heathrow', 'HEA001')

barcelona.addPlane(testPlane)
testPlane.boardPassenger('John Doe')
testPlane.passengers[0].bags.push(new Bag(15))

module.exports = {Airport, barcelona}