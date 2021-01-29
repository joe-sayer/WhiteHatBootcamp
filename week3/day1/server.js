const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')
const {Rating} = require('./Rating')

const app = express()
const port = 3000

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// read data as if it is JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// root restaurants page
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({ // grab all restaurant records
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

    // add rating grab and calculation
    const rating = await Rating.findAll({ // grab rating
        where: {restaurant_id: req.params.id} // where restaurant_id is equal to given id in url (params)
    }).then(rating => { // promise resolve
        let reducedRating = 0;
        for(let i = 0; i < rating.length; i++) {
            reducedRating += rating[i].stars // add ratings together
        }
        return reducedRating / rating.length // return average
    }).catch(err => { // catch error - most likely because there are no current ratings in db
        console.log(err)
    })

    res.render('restaurant', {restaurant, menus, rating})    
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

// serve new page
app.get('/new', (req, res) => {
    res.render('new')
})

// create new restaurant from new restaurant page
app.post('/restaurants', async (req, res) => {
    console.log(req.body)
    await Restaurant.create(req.body)
    res.redirect('/')
})

// serve edit page
app.get('/restaurants/:id/edit', async (req, res) => {
    Restaurant.findByPk(req.params.id).then(restaurant => {
        res.render('edit', { restaurant })
    })
})

// handling edit
app.post('/restaurants/:id/edit', async (req, res) => {
    Restaurant.findByPk(req.params.id).then(restaurant => {
        restaurant.update(req.body)
        res.redirect(`/restaurants/${restaurant.id}`)
    })
})

// delete restaurant
app.get('/restaurants/:id/delete', async (req, res) => {
    await Restaurant.findByPk(req.params.id).then(restaurant => {
        restaurant.destroy()
        res.redirect('/')
    })
})  

// serve rating page
app.get('/restaurants/:id/rating', async (req, res) => {
    await Restaurant.findByPk(req.params.id).then(restaurant => {
        res.render('rating', { restaurant })
    })
})

// handle rating submission
app.post('/restaurants/:id/rating', async (req, res) => {
    Rating.create({stars: req.body.rating, restaurant_id: req.params.id})
    res.redirect(`/restaurants/${req.params.id}`)
})

// listen on port 3000
app.listen(port, () => {
    console.log(`Server listening on Port ${port}...`)
})