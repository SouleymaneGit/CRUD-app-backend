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

// find a Campus by Id
router.get('/:id', async (req, res, next) =>{
  try{
     const singleCampus = []
     const result = await models.Campus.findByPk(req.params.id)
     singleCampus.push(result)
     res.json(singleCampus)
  }catch(error){
     console.log(error);
  }
})

module.exports = router;