const { Bag } = require('./Bag')

class Passenger {
    /**
     * Represents a Passenger.
     * @constructor
     * @param {string} name - The first and last name of the passenger.
     */
    constructor(name) {
        if(!name) {
            throw new Error('name is required')
        }
        this.name = name
        this.bags = []
    }
    /** This function adds a new bag to the luggage of the passenger */
    addBag(weight) {
        let newBag = new Bag(weight)
        this.bags.push(newBag)
    }
}

const jim = new Passenger('Jim Smith')
jim.addBag(15)

module.exports = {Passenger, jim}