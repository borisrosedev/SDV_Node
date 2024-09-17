
function checkCredentials (req, res, next) {
    if(req.body.email && req.body.password) {
        return next()
    } else {
        return res.status(400).json({ message : "credentials are missing" })
    }

}

module.exports = checkCredentials

