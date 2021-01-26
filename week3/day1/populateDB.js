const { Restaurant } = require('./Restaurant')
const { Menu } = require('./Menu')
const { MenuItem } = require('./MenuItem')
const fs = require('fs')
const { sequelize } = require('./sequelize_index')

fs.readFile('./restaurants.json', (err, data) => {
    if(err) {
        throw new Error(err)
    }
    const parsedData = JSON.parse(String(data))
    populate(parsedData)
})

async function populate (data) {
    await sequelize.sync()
    let currentMenuId = 1;
    for(let i = 0; i < data.length; i++) { // RESTAURANT INSERTION
        const currentRestaurant = data[i]
        await Restaurant.create({name: currentRestaurant.name, image: currentRestaurant.image})

        for(let j = 0; j < currentRestaurant.menus.length; j++) { // MENU INSERTION
            const currentMenu = currentRestaurant.menus[j]
            await Menu.create({title: currentMenu.title, restaurant_id: i+1})

            for(let k = 0; k < currentMenu.items.length; k++) { // MENU ITEM INSERTION
                const currentMenuItem = currentMenu.items[k]
                await MenuItem.create({name: currentMenuItem.name, price: currentMenuItem.price, menu_id: currentMenuId})
            }
            currentMenuId++
        }
    }
}