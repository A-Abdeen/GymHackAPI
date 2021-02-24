// IMPORTS
const { Class } = require("../db/models/"); //connects to database

// CONTROLLERS
//------------- classes list
exports.classList = async (req, res, next) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (err) {
    next(err);
  }
};

//------------- class detail
exports.classDetail = async (req, res, next) => {
  res.json(req.class);
};

//------------- Create class
exports.classCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
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
