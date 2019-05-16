
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

  app.put('/api/burgers/:id', function (req, res) {
    db.Burgers.update({
      devoured: true
    },
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbBurgers) {
      res.json(dbBurgers);
    })
  })
}

