const {Sequelize} = require(`sequelize`)

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
})

const connectDB = async () => {
    try {
        await db.authenticate()
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB, db}