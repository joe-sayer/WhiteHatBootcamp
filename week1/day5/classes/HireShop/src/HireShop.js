const ChargingStation = require('../../ChargingStation/src/ChargingStation')
const Scooter = require('../../Scooter/src/Scooter')

/**
 * Represents a Hire Shop
 */

class HireShop {

    /**
     * Constructs a Hire Shop
     * 
     * @param {int} id 
     * @param {int} amountOfScooters 
     */
    constructor(id, amountOfScooters) {
        if(!id) {
            throw new Error('HireShop must be assigned an ID')
        }
        this.id = id
        this.chargingStation = new ChargingStation(id)
        this.scooterInventory = []
        this.fill = function() {
            for(let i = 1; i < amountOfScooters; i++) {
                this.scooterInventory[i] = new Scooter(i, i * 100)
            }
        }
        this.fill()
        this.scooterInventory.shift() // removes first empty index of array, if we start loop from 0, we throw an error because 0 is not a valid ID
    }
    /**
     * Displays information on given scooter's battery charge
     * @param {int} scooterId 
     */
    checkScooterBatteryCharge(scooterId) {
        this.scooterInventory.forEach(scooter => {
            if(scooter.id === scooterId) {
                console.log(scooter.battery.showInfo())
            }
        })
    }

    /**
     * Lends out scooter to a user, removes a scooter from inventory
     * @param {object} lendee 
     */
    lendScooter(lendee) {
        console.log(`Lending out scooter with ID of ${this.scooterInventory[this.scooterInventory.length - 1].id}`)
        lendee.scooter = this.scooterInventory.pop()
    }

    /**
     * Receives scooter back into scooter inventory and charges it if needed
     * @param {object} scooter 
     */
    receiveScooter(scooter) {
        // charge scooter first
        if(scooter.battery.currentCharge !== scooter.battery.capacity) { // if scooter battery is not full, charge it
            this.chargingStation.charge(scooter) 
        }
        this.scooterInventory.push(scooter)
    }
}

module.exports = HireShop