const { Campus } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
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
