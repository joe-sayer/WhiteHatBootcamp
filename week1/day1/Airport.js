const { Bag } = require('./Bag')
const { Passenger } = require('./Passenger')
const { Plane } = require('./Plane')



class Airport {
    /**
     * Represents a Airport.
     * @constructor
     * @param {string} name - The name of the airport.
     */
    constructor(name) {
        if(!name) {
            throw new Error('name required')
        }
        this.name = name
        this.planes = []
    }
    /** This function adds a plane currently at the airport.  */
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