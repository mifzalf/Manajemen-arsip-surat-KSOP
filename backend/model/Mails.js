const { DataTypes } = require("sequelize")
const {db} = require(`../config/db`)
const Users = require("./Users")
const Classifications = require("./Classifications")

const Mails = db.define("mail", {
    mail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mail_number: DataTypes.STRING,
    mail_type: DataTypes.ENUM("masuk, keluar"),
    sender_name: DataTypes.STRING,
    recipient_name: DataTypes.STRING,
    sender_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'user_id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    recipient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'user_id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    mail_date: DataTypes.DATE,
    received_date: DataTypes.DATE,
    mail_summary: DataTypes.TEXT,
    classification_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Classifications,
            key: "classification_id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    },
    information: DataTypes.STRING,
    file: DataTypes.STRING
})

module.exports = Mails