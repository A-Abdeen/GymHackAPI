// IMPORTS
const express = require("express"); // app to run backend
const {
  userCreate,
  userList,
  userDelete,
  userUpdate,
} = require("../controllers/userController"); // To access the functions that are called by the routes.
const upload = require("../middleware/multer"); // ONLY IF IMAGE UPLOAD IS INVOLVED

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES
//------------- param to fetch users by ID
router.param("userId", async (req, res, next, userId) => {
  const foundUser = await fetchUser(userId, next);
  if (foundUser) {
    req.user = foundUser;
    next();
  } else {
    next({
      status: 404,
      message: "User not found",
    });
  }
});

//------------- user list
router.get("/", userList);

//------------- Create user
router.post("/", userCreate);

//------------- Delete user
router.delete("/:userId", userDelete);

//------------- Update user
router.put("/:userId", userUpdate);

module.exports = router;
