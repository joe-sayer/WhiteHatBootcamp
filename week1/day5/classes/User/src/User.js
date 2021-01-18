const HireShop = require('../../HireShop/src/HireShop')

/**
 * Represents a User
 */

class User {
    /**
     * Constructs a User
     * @param {string} name 
     */
    constructor(name) {
        if(!name) {
            throw new Error('Name is required')
        }
        this.name = name
        this.scooter = null
        this.hireShopUsed = null
    }

    /**
     * Uses scooter to travel specified distance
     * @param {int} distance 
     */
    useScooter(distance) { // use scooter and drain battery
        if(this.scooter === null) {
            throw new Error('User does not currently have a scooter.')
        }
        this.scooter.useScooter(distance)
    }

    /**
     * Hires a scooter from the specified Hire Shop
     * @param {object} hireShopToBorrowFrom 
     */
    hireScooter(hireShopToBorrowFrom) {
        hireShopToBorrowFrom.lendScooter(this) // pass this up to HireShop
        this.hireShopUsed = hireShopToBorrowFrom // store the HireShop you used
    }

    /**
     * Returns hired scooter to Hire Shop it was hired from
     */
    returnScooter() {
        console.log('Scooter returned...\nChecking Scooter...')
        this.hireShopUsed.receiveScooter(this.scooter) // return scooter to used HireShop
        this.scooter = null // remove scooter from this' possession
    }
}

module.exports = User