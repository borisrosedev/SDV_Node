const express = require("express")
const PretenderController = require("../controllers/pretender")
const { body, param } = require("express-validator")
const checkValidationResult = require("../middlewares/checkValidationResult")
const checkAuth = require("../middlewares/checkAuth")
const route = express.Router()


route.post('/register', body('email').trim().isEmail(), checkValidationResult, PretenderController.register)
route.post('/login', body('email').trim().isEmail(), body('password').trim(), checkValidationResult, PretenderController.login)
route.get('/:id', param('id'), checkValidationResult, checkAuth, PretenderController.getOneById)
module.exports = route