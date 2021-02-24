// IMPORTS
const { Type } = require("../db/models/"); //connects to database

// CONTROLLERS
// //------------- types list
// exports.typeList = async (req, res, next) => {
//   try {
//     const types = await Type.findAll();
//     res.json(types);
//   } catch (err) {
//     next(err);
//   }
// };

// //------------- Create type
// exports.typeCreate = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
//     }
//     const newType = await Type.create(req.body);
//     res.status(201).json(newType);
//   } catch (err) {
//     next(err);
//   }
// };

// //------------- Delete type
// exports.typeDelete = async (req, res, next) => {
//   try {
//     await req.type.destroy();
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// };

// //------------- Update type
// exports.typeUpdate = async (req, res, next) => {
//   try {
//     await req.type.update(req.body);
//     res.status(200).json(req.type);
//   } catch (err) {
//     next(err);
//   }
// };
