const { db } = require('../config/db')
const Mails = require("../model/Mails")
const path = require('path')
const fs = require('fs')

const getMail = async (req, res) => {
    try {
        const data = await Mails.findAll()

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const getMailById = async (req, res) => {
    try {
        let id = req.params.id
        const data = await Mails.findOne({ where: { mail_id: id } })

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const getMailByUser = async (req, res) => {
    try {
        const data = await Mails.findAll({ where: { sender_id: req.user.id, recipient_id: req.user.id } })

        res.status(200).json({ msg: "get data success", data })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const storeMail = async (req, res) => {
    const t = await db.transaction()
    try {
        let filepath = ''
        if (req.file) {
            if (req.body.mail_type == "masuk") {
                filepath = `/mail/incoming/${req.file.filename}`
            } else {
                filepath = `/mail/outcoming/${req.file.filename}`
            }
        } else {
            filepath = null
        }
        await Mails.create({ ...req.body, file: filepath }, { transaction: t })
        await t.commit()

        res.status(201).json({ msg: "success add data" })
    } catch (error) {
        console.log(error)
        await t.rollback()
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const updateMail = async (req, res) => {
    const t = await db.transaction()
    try {
        let id = req.params.id
        let filepath = ''

        let data = await Mails.findOne({ where: { mail_id: id } })
        let oldFile = data.file
        if (req.file) {
            if (req.body.mail_type == "masuk") {
                filepath = `/mail/incoming/${req.file.filename}`
            } else {
                filepath = `/mail/outcoming/${req.file.filename}`
            }
            if (oldFile) {
                let oldPath = path.join(__dirname, '../public', oldFile)
                fs.unlinkSync(oldPath)
            }
        } else {
            filepath = oldFile
        }

        await Mails.update(
            { ...req.body, file: filepath },
            { where: { mail_id: id } , transaction: t},
        )
        await t.commit()

        res.status(201).json({ msg: "success update data" })
    } catch (error) {
        console.log(error)
        await t.rollback()
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

const deleteMail = async (req, res) => {
    const t = await db.transaction()
    try {
        let id = req.params.id
        let data = await Mails.findOne({ where: { mail_id: id } })

        await Mails.destroy({where: {mail_id: id}, transaction: t})

        let oldFile = data.file
        if(oldFile) {
            let oldPath = path.join(__dirname, "../public", oldFile)
            fs.unlinkSync(oldPath)
        }

        await t.commit()
        
        res.status(201).json({ msg: "success delete data" })
    } catch (error) {
        console.log(error)
        await t.rollback()
        res.status(500).json({ msg: "Terjadi error pada fungsi" })
    }
}

module.exports = { getMail, getMailById, getMailByUser, storeMail, updateMail, deleteMail }