const { Bag } = require('./Bag')
const { Person } = require('./Person')

/** Represents a Passenger */

class Passenger extends Person {
    /**
     * @constructor
     * @param {string} name - The first and last name of the passenger (required).
     * @param {int} bag - The weight of an initial bag.
     * @param {string} ticketNumber - Passenger ticket number (required).
     */
    constructor(name, bag, ticketNumber) {
        super(name, bag)
        if(!ticketNumber) {
            throw new Error('ticket required')
        }
        this.ticketNumber = ticketNumber
    }
}

const jim = new Passenger('Jim Smith', 1, '12345')
jim.addLuggage(15, 25)
console.log(jim.bags)

module.exports = {Passenger, jim}