const { DataTypes } = require("sequelize")
const {db} = require(`../config/db`)

const Users = db.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM("user", "superuser")
})

module.exports = Users