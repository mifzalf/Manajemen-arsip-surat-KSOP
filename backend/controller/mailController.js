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
        const data = await Mails.findAll({where: {sender_id: req.user.id, recipient_id: req.user.id}})

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const storeIncomingMail = async (req, res) => {
    try {
        const filepath = ''
        if(req.file) {
            filepath = req.file.filename
        }
        await Mails.create({...req.body, file: filepath})

        res.status(201).json({msg: "success add data"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

module.exports = {getMail, getMailByUser, storeIncomingMail}