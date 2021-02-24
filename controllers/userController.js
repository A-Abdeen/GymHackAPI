// IMPORTS
const { User } = require("../db/models/"); //connects to database

// CONTROLLERS
//------------- users list
exports.userList = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

//------------- Create user
exports.userCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

//------------- Delete user
exports.userDelete = async (req, res, next) => {
  try {
    await req.user.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

//------------- Update user
exports.userUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    await req.user.update(req.body);
    res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
};
