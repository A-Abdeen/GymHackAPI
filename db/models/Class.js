const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("Class", {
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
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  SequelizeSlugify.slugifyModel(Class, {
    source: ["title"],
  });
  return Class;
};
