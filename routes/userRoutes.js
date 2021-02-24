// IMPORTS
const express = require("express"); // app to run backend
const { signIn, signUp } = require("../controllers/userController"); // To access the functions that are called by the routes.
const upload = require("../middleware/multer"); // ONLY IF IMAGE UPLOAD IS INVOLVED
const passport = require("passport"); //to handle sign in authentication

// METHODS
const router = express.Router(); // mini app to handle all routing system for main app

// ROUTES

router.post("/signup", signUp);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signIn
);

module.exports = router;
