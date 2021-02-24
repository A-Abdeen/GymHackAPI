module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Gym", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
