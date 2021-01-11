const { Bag } = require('./Bag')

class Passenger {
    constructor(name) {
        if(!name) {
            throw new Error('name is required')
        }
        this.name = name
        this.bags = []
    }

    addBag(weight) {
        let newBag = new Bag(weight)
        this.bags.push(newBag)
    }
}

const jim = new Passenger('Jim Smith')
jim.addBag(15)

module.exports = {Passenger, jim}