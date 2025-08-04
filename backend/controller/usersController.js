const jwt = require(`jsonwebtoken`)
const Users = require("../model/Users")

const login = async (req, res, next) => {
    try {
        let { email, password } = req.body

        const isMatch = await Users.findOne({ where: { email, password } })

        if (!isMatch) return res.status(400).json({ msg: "Password / email tidak sesuai" })
        const token = jwt.sign({
            id: isMatch.user_id,
            email: isMatch.email
        }, process.env.JWT_SECRET, { expiresIn: '1d' })

        return res.status(200).json({msg: "Berhasil login", token})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi login" })
    }
}

const getUser = async (req, res, next) => {
    try {
        const data = await Users.findAll()

        return res.status(200).json({msg: "Berhasil mengambil data", data})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi tampil data" })
    }
}

const getUserById = async (req, res, next) => {
    try {
        let id = req.params.id
        const data = await Users.findAll({where: {user_id: id}})

        return res.status(200).json({msg: "Berhasil mengambil data", data})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi tampil data" })
    }
}

const storeUser = async (req, res, next) => {
    try {
        let {email, password, role} = req.body
        let existData = await Users.findOne({where: {email}})
        
        if(existData) return res.status(500).json({msg: "Email sudah digunakan, silahkan inputkan email yang lain"})

        await Users.create({email, password, role})
        res.status(201).json({msg: "berhasil menambahkan user"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi tambah" })
    }
}

const updateUser = async (req, res, next) => {
    try {
        let id = req.params.id
        let {email, password, role} = req.body
        await Users.update({email, password, role},{where: {user_id: id}})

        return res.status(200).json({msg: "Berhasil mengubah data"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi update" })
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let id = req.params.id
        await Users.destroy({where: {user_id: id}})
        
        return res.status(200).json({msg: "Berhasil menghapus data"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error pada fungsi hapus" })
    }
}

module.exports = {login, getUser, getUserById, storeUser, updateUser, deleteUser}