/**
 * Represents a Battery
 */

class Battery {
    /**
     * Constructs a Battery
     * @param {int} batterySize 
     */
    constructor(batterySize) {
        if(!batterySize) {
            throw new Error('Must have a battery capacity.')
        }
        this.capacity = batterySize
        this.currentCharge = this.capacity // can check if battery is fully charged by comparing current charge with capacity
        // this.isEmpty = false
    }

    /**
     * Discharges battery by specified amount
     * @param {int} amount 
     */
    useBattery(amount) {
        if(amount > this.capacity || amount > this.currentCharge) {
            throw new Error('Not enough charge in battery.')
        } else {
            console.log(`Using ${amount} battery charge`)
            this.currentCharge -= amount;
            console.log(`Battery charge status: ${Math.floor((this.currentCharge / this.capacity) * 100)}%`)
        }

        if(this.currentCharge === 0) {
            throw new Error('Battery is EMPTY.\nPlease charge battery.')
        }
    }
    
    /**
     * Returns information on current battery levels
     */
    showInfo() {
        return `Current battery charge: ${this.currentCharge} / ${this.capacity} | ${Math.floor((this.currentCharge / this.capacity) * 100)}%`
    }
}

module.exports = Battery