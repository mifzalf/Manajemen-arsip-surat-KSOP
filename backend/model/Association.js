const Classifications = require(`./Classifications`)
const Mails = require(`./Mails`)
const Users = require(`./Users`)

Users.hasMany(Mails, {foreignKey: "sender_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})

Users.hasMany(Mails, {foreignKey: "recipient_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})

Classifications.hasMany(Mails, {foreignKey: "classification_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})

Mails.belongsTo(Users, {foreignKey: "sender_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})
 
Mails.belongsTo(Users, {foreignKey: "recipient_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})

Mails.belongsTo(Classifications, {foreignKey: "classification_id", onDelete: "CASCADE", onUpdate: "CASCADE", hooks: true})

module.exports = {Classifications, Mails, Users}