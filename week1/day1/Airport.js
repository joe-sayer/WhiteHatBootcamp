const { Bag } = require('./Bag')
const { Passenger } = require('./Passenger')
const { Plane } = require('./Plane')
const fs = require('fs')
const data = require('./airports.json');

/** Represents an Airport  */
class Airport {
    /**
     * Constructor for class.
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
    /** This function adds a plane currently at the airport (lands a plane).
    *  @param {object} plane - An instance of the plane class
    */
    addPlane(plane) {
        this.planes.push(plane)
    }

    getInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile('./airports.json', (err, data) => {
                if (err) return reject(err)
                
                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports)
                    .filter(airportCode => airports[airportCode].iata === this.name)
                    .map(airportCode => airports[airportCode])
                
                resolve(airport)
            })
        })
    }
}

const barcelona = new Airport('Barcelona')
const testPlane = new Plane('Heathrow', 'HEA001')

barcelona.addPlane(testPlane)
testPlane.addPassenger('John Doe')
testPlane.passengers[0].bags.push(new Bag(15)) //addLuggage?

barcelona.getInfo()

module.exports = {Airport, barcelona}