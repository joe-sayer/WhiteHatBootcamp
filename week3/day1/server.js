const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')

const app = express()
const port = 3000

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [{model: Menu, as: 'menus'}],
        nest: true
    })
    res.render('restaurants', {restaurants})
})

app.get('/about', (req, res) => {
    res.render('about',
    {
        person: {
            firstName: 'Joe',
            lastName: 'Sayer'
        }
    })
})

app.listen(port, () => {
    console.log(`Server listening on Port ${port}...`)
})