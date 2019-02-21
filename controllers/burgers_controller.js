//importing our packages
var express = require("express");
var db = require("../models/");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
  db.Burger.findAll().then(function(dbBurger){
    console.log(dbBurger);
    var hbsObject = {
      burger: dbBurger
    };
    return res.render("index", hbsObject)
  });
});
router.post("/burgers/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // pass the result of our call
    .then(function(dbBurger) {
      // log the result to our terminal/bash window
      console.log(dbBurger);
      // redirect
      res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burger.update({
    devoured: true
  }, {
    where: {
    id: req.params.id
  }
}).then(function(result) {
    res.redirect(303, '/');
  });
});

// export the `router`
module.exports = router;
