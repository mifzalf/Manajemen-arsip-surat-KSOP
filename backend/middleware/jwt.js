const jwt = require(`jsonwebtoken`)

const verifyToken = (req, res, next) => {
    try {
        const token = req.header(`Authorization`)?.replace("Bearer ", "")
        if(!token) return res.status(400).json({msg: "There is no access"})

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.status(400).json({msg: "Invalid / expired token"})
            req.user = decoded
            next()
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error jwt"})
    }
}

module.exports = verifyToken