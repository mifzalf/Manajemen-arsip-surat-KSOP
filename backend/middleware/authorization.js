const Users = require("../model/Users")

const adminAuthorization = async (req, res, next) => {
    try {
        let email = req.user.email

        let isAdmin = await Users.findOne({ where: {email, role: "superuser"} })
        if(!isAdmin) return res.status(400).json({msg: "User tidak ditemukan / tidak memiliki akses"})

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "terjadi kesalahan pada middleware" })
    }
}

const userAuthorization = async (req, res, next) => {
    try {
        let id = req.params.id
        let data = await Users.findOne({where: {email: req.user.email}})
        console.log(data)
        console.log(id)
        if(data.user_id != id && data.role == "user") return res.status(500).json({msg: "anda tidak memiliki akses"})
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "terjadi kesalahan pada middleware" })
    }
}

module.exports = {adminAuthorization, userAuthorization}