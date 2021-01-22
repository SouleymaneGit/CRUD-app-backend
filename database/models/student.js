const Sequelize = require('sequelize')
const db = require('../db')

//define a table called students, set keywords and values, need to validate gpa so that it has one decimal
const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
        
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            len: [0, 4]
        }

    }

})

module.exports = Student