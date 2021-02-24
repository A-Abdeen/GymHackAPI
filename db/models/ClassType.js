module.exports = (sequelize, DataTypes) => {
  return sequelize.define("ClassType", {
    name: {
      type: DataTypes.STRING,
    },
  });
};
