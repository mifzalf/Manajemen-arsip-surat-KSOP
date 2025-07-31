const jwt = require(`jsonwebtoken`)
const Users = require("../model/Users")

const login = async (req, res, next) => {
    try {
        let { email, password } = req.body

        const isMatch = await Users.findOne({ where: { email, password } })

        if (!isMatch) return res.status(400).json({ msg: "Password / email tidak sesuai" })
        const token = jwt.sign({
            id: isMatch.user_id,
            email: isMatch.user_email
        }, process.env.JWT_SECRET, { expiresIn: '1d' })

        return res.status(200).json({msg: "Berhasil login", token})
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "Error saat login" })
    }
}

module.exports = {login}