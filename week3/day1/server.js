const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')

const app = express()
const port = 3000

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')


// root restaurants page
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
            
        ],
        nest: true
    })
    res.render('restaurants', {restaurants})
})


// dynamic routing for each restaurant displayed in restaurants page
app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    })
    res.render('restaurant', {restaurant, menus})
})


// about page
app.get('/about', (req, res) => {
    res.render('about',
    {
        person: {
            firstName: 'Joe',
            lastName: 'Sayer'
        }
    })
})


// listen on port 3000
app.listen(port, () => {
    console.log(`Server listening on Port ${port}...`)
})