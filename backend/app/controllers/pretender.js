const { where } = require("sequelize");
const Pretender = require("../models/Pretender");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class PretenderController {


   static async login (req, res, next) {

        const pretender = await Pretender.findOne({ 
            where: { email: req.body.email }
        })

        if(!pretender) return res.status(400).json({ message: 'Invalid data' })
    
        const isPasswordValid = bcrypt.compareSync(req.body.password, pretender.password)
        if(!isPasswordValid) return res.status(400).json({ message: 'Invalid data' })
        
        const token = jwt.sign({ email: pretender.email }, process.env.JWT_SECRET, { expiresIn: '1h'})

        const pretenderDTO = { ...pretender.dataValues, token };
        delete pretenderDTO.password
        
        return res.status(200).json(pretenderDTO)

   }

    static async register(req, res, next) {
        // check if req has props such as email and password
     
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

        const newPretenderDTO = {...newPretender.dataValues}
        delete newPretenderDTO.password

        return res.status(201).json(newPretenderDTO)
        
    }
    //crud 
    static async getAll(req, res) {

    }

    static async getOneById(req, res) {
        const pretender = await Pretender.findOne({ where:{ id: req.params.id }})
        if(!pretender) return res.status(404).json({ message: 'user not found'})
        if(!(pretender.email === req.auth)) return res.status(400).json({ message : 'invalid data'})
        const pretenderDTO = pretender.dataValues
        delete pretenderDTO.password
        return res.status(200).json(pretender.dataValues)
    }

    static async updateOneById(req, res) {

    }

    static async deleteOneById(req, res) {

    }



}


module.exports = PretenderController