const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('./restaurantdb.sqlite', err => {
    if(err) {
        console.log(err)
    }
})


db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS restaurants`)
    db.run(`DROP TABLE IF EXISTS menus`)
    db.run(`DROP TABLE IF EXISTS menuitems`)

    const createRestaurantTable = db.prepare(`CREATE TABLE restaurants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING,
        image STRING
    );`)

    const createMenusTable = db.prepare(`CREATE TABLE menus
        (name STRING);`)

    const createMenuitemsTable = db.prepare(`CREATE TABLE menuitems (
        name STRING,
        price REAL
        );`)

    createRestaurantTable.run()
    createRestaurantTable.finalize()
    createMenusTable.run()
    createMenusTable.finalize()
    createMenuitemsTable.run()
    createMenuitemsTable.finalize()
})