const { Person } = require('./Person')

/** Represents a Crew member  */

class Crew extends Person {
    /**
     * Constructor for Crew member.
     * @constructor
     * @param {string} name - The name of the crew member (required).
     * @param {int} bag - The weight of an initial bag.
     */
    constructor(name, bag) {
        super(name, bag)
    }
}

module.exports = {Crew}