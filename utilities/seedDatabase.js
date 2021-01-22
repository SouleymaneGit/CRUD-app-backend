const { Student, Campus } = require('../database/models');

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
    }),
    Campus.create({
      name: "Brooklyn College",
      imageURL: "Irving",
      address: "1234",
      description: ""
    }),

    Campus.create({
      name: "Queens College",
      imageURL: "Irving",
      address: "12345",
      description: ""
    }),

    Campus.create({
      name: "USA College",
      imageURL: "Irving",
      address: "12346",
      description: ""
    }),

    Campus.create({
      name: "New York College",
      imageURL: "Irving",
      address: "1234666",
      description: ""
    }),

  ]);
}

module.exports = seedDatabase;
