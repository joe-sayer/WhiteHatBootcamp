const { sequelize, DataTypes, Model } = require('./sequelize_index')

class Rating extends Model {
    // add methods here
}

Rating.init({
    stars: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = { Rating }