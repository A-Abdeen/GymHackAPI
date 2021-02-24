// IMPORTS
const { Class, Gym } = require("../db/models/"); //connects to database

// CONTROLLERS

//------------- param to fetch classes by ID
exports.fetchClass = async (classId, next) => {
  try {
    const foundClass = await Class.findByPk(classId);
    return foundClass;
  } catch (err) {
    next(err);
  }
};
//------------- classes list
exports.classList = async (req, res, next) => {
  try {
    const classes = await Class.findAll({
      attributes: {
        exclude: ["classTypeId", "gymId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Gym,
          as: "gym",
          attributes: ["name"],
        },
        {
          model: ClassType,
          as: "classType",
          attributes: ["name"],
        },
      ],
    });
    res.json(classes);
  } catch (err) {
    next(err);
  }
};

//------------- class detail
exports.classDetail = async (req, res, next) => {
  res.json(req.class);
};

//------------- Delete class
exports.classDelete = async (req, res, next) => {
  try {
    await req.class.destroy();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

//------------- Update class
exports.classUpdate = async (req, res, next) => {
  try {
    await req.class.update(req.body);
    res.status(200).json(req.class);
  } catch (err) {
    next(err);
  }
};
