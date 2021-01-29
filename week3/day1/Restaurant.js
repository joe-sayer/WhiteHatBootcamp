const {sequelize, DataTypes, Model} = require('./sequelize_index')
const {Menu} = require('./Menu')
const {Rating} = require('./Rating')

class Restaurant extends Model {
    // class methods here
}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

// link menus
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

// link rating
Restaurant.hasMany(Rating, {as: 'ratings', foreignKey: 'restaurant_id'})
Rating.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

// (async () => {
//     await sequelize.sync({force: true})
//     const r = await Restaurant.create({name: 'Zaza', image: 'some-image-link'})
//     console.log(`Inserted restaurant name = ${r.name}`)
// })

module.exports = { Restaurant }