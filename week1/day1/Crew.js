const { Person } = require('./Person')

class Crew extends Person {
    constructor(name, bag) {
        super(name, bag)
    }
}

module.exports = {Crew}