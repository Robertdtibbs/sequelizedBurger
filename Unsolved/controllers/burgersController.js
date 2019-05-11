
var db = require("../models");

module.exports = function (app) {

  // Route to get all burgers
  app.get("/api/burgers", function (req, res) {
    db.Burgers.findAll({})
      .then(function (dbBurgers) {
        res.json(dbBurgers);
      })
  });

  // takes UI input to create a new object
  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.STRING,
      devoured: false,
    }).then(function (dbBurgers) {
      res.json(dbBurgers);
    })
  });

  app.put("")
}




// var express = require("express");

// var router = express.Router();
// var burger = require("../models/burger.js");

// router.get("/api/burgers", function(req, res) {
//   express callback response by calling burger.selectAllBurger
//   burger.all(function(burgerData) {
//     res.json(burgerData);
//   });
// });

// post route
// router.post("/api/burgers", function(req, res) {
//   takes the request object using it as input for burger.addBurger
//   burger.create(req.body.burger_name, function(result) {
//     console.log(result);
//     Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// put route
// router.put("/api/burgers/:id", function(req, res) {
//   burger.update(req.params.id, function(result) {
//     console.log(result);
//     Send back response and let page reload from .then in Ajax
//     res.sendStatus(200);
//   });
// });

// module.exports = router;
