// IMPORTS
const { Gym } = require("../db/models/"); //connects to database

// CONTROLLERS
//------------- gyms list
exports.gymList = async (req, res, next) => {
  try {
    const gyms = await Gym.findAll();
    res.json(gyms);
  } catch (err) {
    next(err);
  }
};

//------------- Create gym
exports.gymCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newGym = await Gym.create(req.body);
    res.status(201).json(newGym);
  } catch (err) {
    next(err);
  }
};

//------------- Delete gym
exports.gymDelete = async (req, res, next) => {
  try {
    await req.user.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
