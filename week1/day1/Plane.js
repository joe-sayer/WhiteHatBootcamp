const { builtinModules } = require('module')
const { Passenger } = require('./Passenger')

class Plane {
    constructor(destination, flightId) {
        this.destination = destination
        this.flightId = flightId;
        this.passengers = []
        this.amountPassengers = 0;
    }

    boardPassenger(name) {
        let newPassenger = new Passenger(name)
        this.amountPassengers++
        this.passengers.push(newPassenger)
    }
}

const plane1 = new Plane('Heathrow')

module.exports = {Plane, plane1}