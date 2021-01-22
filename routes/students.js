const express = require('express');
const router = express.Router();
const models = require('../database/models');

//gets all data from student table
router.get('/', (req, res, next) => {
    models.Student.findAll()
    .then(students => {
        res.status(200)
        .json({
            message: 'got students',
            students
        })
    })
    .catch(err => {
        res.status(200)
        .json({err})
    })

})

module.exports = router