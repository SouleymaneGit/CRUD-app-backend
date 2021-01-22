// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

//export student model 
const Student = require('./student')
//export campus model
const Campus = require("./campus")

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Student,
  Campus
};