// IMPORTS
const express = require("express"); // app to run backend
const {
  typeCreate,
  typeList,
  typeDelete,
  typeUpdate,
} = require("../controllers/typeController"); // To access the functions that are called by the routes.
const upload = require("../middleware/multer"); // ONLY IF IMAGE UPLOAD IS INVOLVED

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES
//------------- param to fetch types by ID
router.param("typeId", async (req, res, next, typeId) => {
  const foundType = await fetchType(typeId, next);
  if (foundType) {
    req.type = foundType;
    next();
  } else {
    next({
      status: 404,
      message: "Type not found",
    });
  }
});

// //------------- type list
// router.get("/", typeList);

// //------------- Create type
// router.post("/", typeCreate);

// //------------- Delete type
// router.delete("/:typeId", typeDelete);

// //------------- Update type
// router.put("/:typeId", typeUpdate);

module.exports = router;
