const { validationResult } = require("express-validator");


function checkValidationResult (req, res, next) {
    const result = validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).json(result.array())
    } 
    return next()
}

module.exports = checkValidationResult