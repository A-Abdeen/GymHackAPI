module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username already exists",
      },
    },
    access: {
      type: DataTypes.ENUM,
      values: ["admin", "user"],
    },
    bookings: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: 3,
      },
    },
    // password: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    // timestamps: false,
  });
};
