const { Sequelize, DataTypes, Model } = require('sequelize') // import sequelize and sequelize types

const sequelize = new Sequelize('database', 'username', 'password', { // sets up connection to database
    dialect: 'sqlite', // would be very easy to change type of database by just changing this configuration
    storage: './restaurants-seq.sqlite'
})

module.exports = { sequelize, DataTypes, Model }