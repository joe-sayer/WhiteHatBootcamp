class User {
    constructor(name) {
        if(!name) {
            throw new Error('Name is required')
        }
        this.name = name
        this.scooter = null
    }

    useScooter() { // use scooter and drain battery
        if(this.scooter === null) {
            throw new Error('User does not currently have a scooter.')
        }
        this.scooter.battery = 0
        this.scooter.battery.isEmpty = true
    }
}

module.export = User