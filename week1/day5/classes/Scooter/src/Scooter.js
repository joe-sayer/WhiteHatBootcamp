const Battery = require('../../Battery/src/Battery')

/**
 * Represents a Scooter
 */

class Scooter {
    /**
     * Constructs a Scooter
     * @param {int} id 
     * @param {int} batterySize 
     */
    constructor(id, batterySize=100) {
        if(!id) {
            throw new Error('Scooter must be assigned an ID')
        }
        this.id = id
        this.battery = new Battery(batterySize)
    }

    /**
     * Uses scooter to travel specified distance
     * @param {int} distance 
     */
    useScooter(distance) {
        this.battery.useBattery(distance)
    }

    /**
     * Displays information about scooter
     */
    showInfo() {
        return `Scooter ID: ${this.id} \n${this.battery.showInfo()}`
    }
}

module.exports = Scooter