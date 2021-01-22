const express = require('express');


const router = express.Router();
// const { Campus, Student } = require('../database/models');
// const { Campus } = require('../database/models');
const models = require("../database/models")




router.get('/', async (req, res, next) => {
  console.log("req.query", req.query);
  try{
      const allCampuses = await models.Campus.findAll()
          res.json(allCampuses);
      
  }catch(error){
      next(error);
  }
});

// router.get('/', function(req, res, next) {
//   Campus.findAll()
//     .then(campus => res.json(campus))
//     .catch(err => console.log(err))
// });

// router.get('/', (req, res, next) => {
//   models.Campus.findAll()
//   .then(campuses => {
//     res.status(200).json({
//       message: "sucess",
//       campuses
//     })
//   }).catch(err => {
//     res.status(400).json({err})
//   })
// })


// route.get("")

module.exports = router;