const { builtinModules } = require('module')
const { Passenger } = require('./Passenger')
const { Crew } = require('./Crew')

/**
 * @module Plane
 */

class Plane {
    /**
     * Represents a Plane.
     * @constructor
     * @param {string} destination - The destination of the flight.
     * @param {string} flightId - The flight ID of the flight.
     */
    constructor(destination, flightId) {
        this.destination = destination
        this.flightId = flightId
        this.usingFlight = []
        this.passengers = []
        this.crew = []
        this.amountPassengers = 0
    }
    /** This function adds a passenger to the flight before takeoff and increases the passenger count. 
      * @param {object} name - This is the name of the passenger
    */
    addPassenger(passenger) {
        this.amountPassengers++
        this.usingFlight.push(passenger)
    }

    /** This function adds a crew member to the flight before takeoff and increases the passenger count. 
      * @param {object} name - This is the name of the passenger
    */
    addCrewMember(crew) {
        this.usingFlight.push(crew)
    }
    /** This function boards both crew and passengers to plane ready for takeoff. */
    board() {
        this.usingFlight.forEach(p => {
            if(p instanceof Crew) {
                this.crew.push(p)
            } else {
                this.passengers.push(p)
            }
        })
    }
}

module.exports = {Plane, plane1}