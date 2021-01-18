/**
 * Represents a Charging Station
 */

class ChargingStation {
    /**
     * Constructs a Charging Station
     * @param {int} id 
     */
    constructor(id) {
        if(!id) {
            throw new Error('ChargingStation must be assigned an ID')
        }
        this.id = id
    }

    /**
     * Charges specified scooter's battery
     * @param {object} scooter 
     */
    async charge(scooter) {
        console.log('Starting charge...')
        await new Promise(resolve => setTimeout(resolve, 3000))
        scooter.battery.currentCharge = scooter.battery.capacity
        console.log('Charging finished.')
        console.log(scooter.battery.showInfo())
    }
}

module.exports = ChargingStation