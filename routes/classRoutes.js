// IMPORTS
const express = require("express"); // app to run backend
const {
  classCreate,
  classList,
  classDelete,
  classUpdate,
  classDetail,
} = require("../controllers/classController"); // To access the functions that are called by the routes.
const upload = require("../middleware/multer"); // ONLY IF IMAGE UPLOAD IS INVOLVED

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES
//------------- param to fetch classes by ID
router.param("classId", async (req, res, next, classId) => {
  const foundClass = await fetchClass(classId, next);
  if (foundClass) {
    req.class = foundClass;
    next();
  } else {
    next({
      status: 404,
      message: "Class not found",
    });
  }
});

//------------- class list
router.get("/", classList);

//------------- class detail
router.get("/:classId", classDetail);

//------------- Create class
router.post("/", classCreate);

//------------- Delete class
router.delete("/:classId", classDelete);

//------------- Update class
router.put("/:classId", classUpdate);

module.exports = router;
