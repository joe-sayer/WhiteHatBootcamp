/**
 * @module Bag
 */

class Bag {
    /**
     * Represents a bag.
     * @constructor
     * @param {int} weight - The weight of the bag (required).
     */
    constructor(weight) {
        if(!weight) {
            throw new Error('must have a weight')
        }
        this.weight = weight;
    }
}

const testBag = new Bag(10)

module.exports = {Bag, testBag}