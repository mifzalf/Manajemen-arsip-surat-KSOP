const { DataTypes } = require("sequelize")
const {db} = require(`../config/db`)

const Classifications = db.define("classification", {
    classification_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    classification_name: DataTypes.STRING,
    classification_code: DataTypes.STRING
})

module.exports = Classifications