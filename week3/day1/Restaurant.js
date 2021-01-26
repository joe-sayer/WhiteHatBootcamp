const {sequelize, DataTypes, Model} = require('./sequelize_index')
const {Menu} = require('./Menu')

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

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

// (async () => {
//     await sequelize.sync({force: true})
//     const r = await Restaurant.create({name: 'Zaza', image: 'some-image-link'})
//     console.log(`Inserted restaurant name = ${r.name}`)
// })

module.exports = { Restaurant }