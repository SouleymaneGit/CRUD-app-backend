const { Student } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving",
      email: 'test@gmail.com',
      gpa: 4
    }),
    Student.create({
      firstName: "LeBron",
      lastName: "James",
      jerseyNumber: 23,
      email: 'lbj@gmail.com',
      gpa: 3
    }),
    Student.create({
      firstName: "Luka",
      lastName: "Doncic",
      jerseyNumber: 77,
      email: 'lukad@gmail.com',
      gpa: 2
    })
  ]);
}

module.exports = seedDatabase;
