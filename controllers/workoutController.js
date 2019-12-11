var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/workouts.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      workouts: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/workouts", function(req, res) {

});

router.put("/api/workouts/:id", function(req, res) {
  var id = req.params.id;

});

// Export routes for server.js to use.
module.exports = router;