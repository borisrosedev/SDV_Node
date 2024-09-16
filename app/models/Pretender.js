const { DataTypes } = require("sequelize");
const Database = require("../database");

const sequelize = Database.getInstance()


const Pretender = sequelize.define('Pretender', {

    firstname: {
        type: DataTypes.STRING,

    }, 
    lastname: {
        type: DataTypes.STRING,

    },
    email: {
        type: DataTypes.STRING,
        unique: true,

    },
    password: {
        type: DataTypes.STRING,

    },
    birthdate: {
        type: DataTypes.DATE,

    },
    status: {
        type: DataTypes.ENUM,
        values: ['active', 'inactive']
    },
    photo: {
        type : DataTypes.STRING,

    },
    wallet : {
        type: DataTypes.FLOAT,
        default: 0
    },
    likes: {
        type: DataTypes.INTEGER,
        default: 0
    }


})


//console.log(Pretender === sequelize.models.Pretender);
//Pretender.sync({ alter: true })

module.exports = Pretender