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
// get a single student using student id
router.get('/:student_id', async (req, res, next) => {
    console.log(req.params);
    try{
    const student = await models.Student.findAll({
        where: {
            id: req.params.student_id
        },
        include: models.Campus
    })
    res.json(student);
    }catch(error){
        console.error(error.message);
    }
})
// remove a single student using student id
router.delete('/:student_id', async (req, res, next) => {
    console.log(req.params);
    try{
    const student = await models.Student.destroy({
        where: {
            id: req.params.student_id
        }
    })
    res.json(student);
    }catch(error){
        console.error(error.message);
    }
})
// create a new student
router.post('/', async (req, res, next) => {
    try {
        const { first , last , e , image, g } = req.body;
        const student = await models.Student.create({
            firstName: first,
            lastName: last,
            email: e,
            imageUrl: image,
            gpa: g
        })
        res.json("student was added succefully");
    } catch (error) {
        console.error(error.message);
    }
})



module.exports = router
