const { Op } = require("sequelize")
const Classifications = require("../model/Classifications")

const getClassification = async (req, res, next) => {
    try {
        let data = await Classifications.findAll()

        return res.status(200).json({ msg: "Success get data", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Terjadi kesalahan pada fungsi ambil data" })
    }
}

const getClassificationById = async (req, res, next) => {
    try {
        let id = req.params.id
        let data = await Classifications.findOne({ where: { classification_id: id } })

        return res.status(200).json({ msg: "success get data", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Terjadi kesalahan pada fungsi ambil data" })
    }
}

const storeClassification = async (req, res, next) => {
    try {
        let { classification_code, classification_name } = req.body
        let existData = await Classifications.findOne({
            where: {
                [Op.or]: {
                    classification_code,
                    classification_name
                }
            }
        })
        if (existData) return res.status(500).json({ msg: "nama / kode sudah ada" })

        await Classifications.create({ ...req.body })
        return res.status(201).json({ msg: "success add data" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Terjadi kesalahan pada fungsi tambah" })
    }
}

const updateClassification = async (req, res, next) => {
    try {
        let id = req.params.id
        let { classification_code, classification_name } = req.body

        let existData = await Classifications.findOne({
            where: {
                [Op.or]: {
                    classification_code,
                    classification_name
                },
                classification_id: { [Op.ne]: id }
            }
        })
        if (existData) return res.status(500).json({ msg: "nama / kode sudah ada" })

        await Classifications.update({ classification_code, classification_name }, { where: { classification_id: id } })
        return res.status(201).json({ msg: "success update data" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Terjadi kesalahan pada fungsi update" })
    }
}

const deleteClassification = async (req, res, next) => {
    try {
        let id = req.params.id
        await Classifications.destroy({ where: { classification_id: id } })

        return res.status(200).json({msg: "success delete data"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Terjadi kesalahan pada fungsi hapus" })
    }
}

module.exports = { getClassification, getClassificationById, storeClassification, updateClassification, deleteClassification }