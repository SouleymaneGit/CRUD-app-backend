const express = require("express");
const { model } = require("../database/db");
const router = express.Router();
const models = require("../database/models");
const { includes } = require("../utilities/databaseName");

//gets all data from student table
router.get("/", (req, res, next) => {
  models.Student.findAll({
    include: models.Campus
  })
    .then((students) => {
      res.status(200).json({
        message: "got students",
        students,
      });
    })
    .catch((err) => {
      res.status(200).json({ err });
    });
});
// get a single student using student id
router.get("/:student_id", async (req, res, next) => {
  console.log(req.params);
  try {
    const student = await models.Student.findAll({
      where: {
        id: req.params.student_id,
      },
      include: models.Campus,
    });
    res.json(student);
  } catch (error) {
    console.error(error.message);
  }
});
// remove a single student using student id
router.delete("/:student_id", async (req, res, next) => {
  console.log(req.params);
  try {
    const student = await models.Student.destroy({
      where: {
        id: req.params.student_id,
      },
    });
    res.json(student);
  } catch (error) {
    console.error(error.message);
  }
});
// create a new student
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
    const student = await models.Student.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      imageUrl: imageUrl,
      gpa: gpa,
      campusId: campusId,
    });
    res.json(student);
  } catch (error) {
    console.error(error.message);
  }
});

router.put("/:student_id", async (req, res, next) => {

  try {
    //use include to prevent error when updating, causes error without include b/c campus object becomes undefined, however it does not display correct campus
    const student = await models.Student.findByPk(req.params.student_id, {include: models.Campus})
    if (!student){
      res.status(404)
      .json({
        message: "student not found"
      });
    }
    await student.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      imageUrl: req.body.imageUrl,
      gpa: req.body.gpa,
      campusId: req.body.campusId,
  });
    await student.save();

    res.status(200).json({
      message: "update success",
      student
  })

  } catch (error) {
    res.status(500).json({
      message: "error",err
  })
  }
})

module.exports = router;
