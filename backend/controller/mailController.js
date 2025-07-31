const Mails = require("../model/Mails")

const getMail = async (req, res) => {
    try {
        const data = await Mails.findAll()

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const getMailByUser = async (req, res) => {
    try {
        const data = await Mails.findAll()

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

module.exports = {getMail, getMailByUser}