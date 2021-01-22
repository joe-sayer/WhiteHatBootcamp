const fs = require('fs')
const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('./restaurantdb.sqlite',err => { // connect to initialised database
    if(err) {
        throw new Error(err)
    }
})

populateData = data => {
    db.serialize(() => {
        for(let i = 0; i < data.length; i++) { // loop through json
            db.run(`INSERT INTO restaurants (name, image) VALUES (?,?);`,
            data[i].name,
            data[i].image
            ) // insert restaurants into relevant table
            for(let j = 0; j < data[i].menus.length; j++) { // loop through ith restaurant menus
                db.run(`INSERT INTO menus (name) VALUES (?);`,
                data[i].menus[j].title
                )
                for(let k = 0; k < data[i].menus[j].items.length; k++) {
                    db.run(`INSERT INTO menuitems (name, price) VALUES (?,?);`,
                    data[i].menus[j].items[k].name,
                    data[i].menus[j].items[k].price
                    )
                }
            }
        }
    })
}

fs.readFile('./restaurants.json', (err, data) => {
    if(err) {
        throw new Error(err)
    }
    const parsedData = JSON.parse(data)
    populateData(parsedData)
})