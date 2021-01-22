const express = require('express');
const router = express.Router();

// Subrouters;
// const playersRouter = require('./players');
const campusRouter = require("./campuses");
// const studentRouter = require("./students");

// Mount our subrouters to assemble our apiRouter;
router.use("/campuses", campusRouter);
// router.use("/students", studentRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
