// IMPORTS
const express = require("express"); // app to run backend
const {
  noobCreate,
  noobList,
  noobDelete,
  noobUpdate,
} = require("../controllers/noobController"); // To access the functions that are called by the routes.

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES
//------------- noob list
router.get("/", noobList);

//------------- Create noob
router.post("/", noobCreate);

//------------- Delete noob
router.delete("/:noobId", noobDelete);

//------------- Update noob
router.put("/:noobId", noobUpdate);

module.exports = router;
