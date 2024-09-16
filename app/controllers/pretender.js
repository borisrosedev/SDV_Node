const { where } = require("sequelize");
const Pretender = require("../models/Pretender");
const bcrypt = require("bcrypt");

class PretenderController {


    static async createOne(req, res, next) {
        // check if req has props such as email and password
        if(!(req.body.password && req.body.email)) {
            return next()
        }
        // check if the person who wants to subscribe is not already in the db
        const pretender = await Pretender.findOne({
            where: { email: req.body.email }
        })

        if(pretender) {
            return next()
        }

        // the pretender has not been registered yet and 
        // all the necessary data are present

        // we gonna hash the password then insert into the table
        const hashPassword = bcrypt.hashSync(req.body.password, 10)

    
        const newPretender = await Pretender.create({
            email: req.body.email,
            password: hashPassword
        })

        return res.status(201).json(newPretender)
        
    }
    //crud 
    static async getAll(req, res) {

    }

    static async getOneById(req, res) {

    }

    static async updateOneById(req, res) {

    }

    static async deleteOneById(req, res) {

    }



}


module.exports = PretenderController