// IMPORTS
const { Gym, Class } = require("../db/models/"); //connects to database

// CONTROLLERS

//------------- param to fetch gyms by ID
exports.fetchGym = async (gymId, next) => {
  try {
    const foundGym = await Gym.findByPk(gymId);
    return foundGym;
  } catch (err) {
    next(err);
  }
};

//------------- gyms list
exports.gymList = async (req, res, next) => {
  try {
    const gyms = await Gym.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Class,
        as: "classes",
        attributes: ["id"],
      },
    });
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
    await req.gym.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

//------------- Create class
exports.classCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.gymId = req.gym.id;
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
};
