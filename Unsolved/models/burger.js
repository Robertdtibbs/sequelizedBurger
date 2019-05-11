module.exports = function(sequelize, DataTypes){
  var Burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        len: [3,100]
      }
    },
    devoured: {
      type: Boolean,
      defaultValue: false
    },
  });
  return Burgers;
}



// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;
