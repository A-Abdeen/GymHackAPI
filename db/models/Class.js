module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Class", {
    title: {
      type: DataTypes.STRING,
    },
    seats: {
      type: DataTypes.INTEGER,
    },
    bookedSeats: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
  });
};
