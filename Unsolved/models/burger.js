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
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  return Burgers;
}

