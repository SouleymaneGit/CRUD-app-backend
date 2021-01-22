const Sequelize = require('sequelize');
const db = require("../db");

const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: "https://static.thenounproject.com/png/2481156-200.png",
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


module.exports = Campus;