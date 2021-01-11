const { builtinModules } = require('module')
const { Passenger } = require('./Passenger')

class Plane {
    /**
     * Represents a Plane.
     * @constructor
     * @param {string} destination - The destination of the flight.
     * @param {string} flightId - The flight ID of the flight.
     */
    constructor(destination, flightId) {
        this.destination = destination
        this.flightId = flightId;
        this.passengers = []
        this.amountPassengers = 0;
    }
    /** This function boards a passenger onto the plane and increases the passenger count. */
    boardPassenger(name) {
        let newPassenger = new Passenger(name)
        this.amountPassengers++
        this.passengers.push(newPassenger)
    }
}

const plane1 = new Plane('Heathrow')

module.exports = {Plane, plane1}