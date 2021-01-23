const express = require('express');
const router = express.Router();

// Subrouters;
// const playersRouter = require('./players');
const studentsRouter = require('./students');
const campusRouter = require("./campuses");

// Mount our subrouters to assemble our apiRouter;

//creates route to students.js
router.use('/students', studentsRouter)

//create route to campuses.js
router.use("/campuses", campusRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
