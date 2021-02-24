// IMPORTS
const express = require("express"); // app to run backend
const {
  fetchGym,
  gymCreate,
  gymList,
  gymDelete,
  classCreate,
} = require("../controllers/gymController"); // To access the functions that are called by the routes.

const upload = require("../middleware/multer"); // ONLY IF IMAGE UPLOAD IS INVOLVED

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES
//------------- param to fetch gyms by ID
router.param("gymId", async (req, res, next, gymId) => {
  const foundGym = await fetchGym(gymId, next);
  if (foundGym) {
    req.gym = foundGym;
    next();
  } else {
    next({
      status: 404,
      message: "Gym not found",
    });
  }
});

//------------- gym list
router.get("/", gymList);

//------------- Create gym
router.post("/", gymCreate);

//------------- Delete gym
router.delete("/:gymId", gymDelete);

//---//------------- Create class
router.post("/:gymId/classes", classCreate);

module.exports = router;
