module.exports = function(sequelize, DataTypes){
  var burgers = sequelize.define("burgers", {
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
  return burgers;
}

