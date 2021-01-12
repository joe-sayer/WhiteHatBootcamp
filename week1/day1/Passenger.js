const { Bag } = require('./Bag')
const { Person } = require('./Person')

/**
 * @module Passenger
 */

class Passenger extends Person {
    /**
     * Represents a Passenger.
     * @constructor
     * @param {string} name - The first and last name of the passenger.
     */
    constructor(name, bag, ticketNumber) {
        super(name, bag)
        this.ticketNumber = ticketNumber
    }
    /** This function adds a new bag to the luggage of the passenger 
    * @param {int} weight - Weight of the bag.
    */
    addBag(weight) {
        let newBag = new Bag(weight)
        this.bags.push(newBag)
    }
}

const jim = new Passenger('Jim Smith')
jim.addBag(15)

module.exports = {Passenger, jim}