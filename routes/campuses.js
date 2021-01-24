const { response } = require('express');
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

// find a Campus by Id and all its students
router.get('/:id', async (req, res, next) =>{
  try{
    await models.Campus.findAll(
      
      {
        where: {id: req.params.id},
        include:models.Student
      
      }
      
    ).then(
      reponse => res.json(reponse)
    )
  }catch(error){
     console.log(error);
  }
})

// delete a single Campus

router.delete('/:id', async(req, res, next) =>{
  try{
    await models.Campus.destroy({
      where: {
        id: req.params.id
      }
    }).then(
      reponse => res.send('The Campus with the id number:'+req.params.id+' has been deleted')
    )
  }catch(error){
    console.log(error);
  }
})

module.exports = router;

// adding a new Campus

router.post('/', (req, res, next) =>{

   models.Campus.create({
      name: req.body.name,
      imageURL: req.body.imageURL,
      address: req.body.address,
      description: req.body.description
    })
    .then(campus => res.status(200).send(campus))
  .catch(error =>{
    res.status(500).send('error adding student' + error)
  })
})


router.put("/:campus_id", async (req, res, next) => {

  models.Campus.findByPk(req.params.campus_id)
  .then(campus => {
      if (!campus)
      res.status(404)
      .json({
        message: "not exist"
      });

    campus.update({
        name: req.body.name,
        imageURL: req.body.imageURL,
        address: req.body.address,
        description: req.body.description,
        
    });

    campus.save();

    res.status(200).json({
        message: "update success",
        campus
    })
  })
  .catch(err => {
      res.status(500).json({
          message: "error",err
      })
  
})
})
