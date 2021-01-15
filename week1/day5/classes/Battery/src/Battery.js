class Battery {
    constructor(batterySize) {
        if(!batterySize) {
            throw new Error('Must have a battery capacity.')
        }
        this.capacity = batterySize
        this.currentCharge = this.capacity // can check if battery is fully charged by comparing current charge with capacity
        this.isEmpty = false
    }

    useBattery(amount) {
        if(amount > this.capacity || amount > this.currentCharge) {
            throw new Error('Not enough charge in battery.')
        } else {
            console.log(`Using ${amount} battery capacity`)
            this.currentCharge -= amount;
            console.log(`Battery charge status: ${Math.floor((this.currentCharge / this.capacity) * 100)}%`)
        }
    }

    showInfo() {
        return `Current battery charge: ${this.currentCharge} / ${this.capacity} | ${Math.floor((this.currentCharge / this.capacity) * 100)}%`
    }
}

module.export = {Battery}