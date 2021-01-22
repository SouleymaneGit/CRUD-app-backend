// const sequelize = require("sequelize");
// const Sequelize = require("sequelize");
// const { validate } = require("../db");
// const db = require("../db");

// const Student = db.define("student",{
//     firstName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {isEmail: true}
//     },
//     imageURL: {
//         type: Sequelize.STRING,
//         defaultValue: "its image"
//     },
//     GPA: {
//         type: Sequelize.FLOAT,
//         validate: {min: 0, max: 4}
//     }
// })

// module.exports = Student;