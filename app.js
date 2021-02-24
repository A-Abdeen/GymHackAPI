//IMPORTS
const express = require("express"); // application to run backend
const cors = require("cors"); // To give a browser access to the backend
const bodyParser = require("body-parser"); // Middleware for Express to handle the body of a url
const db = require("./db/models"); //connect the database to the app
const userRoutes = require("./routes/userRoutes"); // mini app to handle all routing system for main app
const gymRoutes = require("./routes/gymRoutes"); // mini app to handle all routing system for main app
const classRoutes = require("./routes/classRoutes"); // mini app to handle all routing system for main app
const typeRoutes = require("./routes/typeRoutes"); // mini app to handle all routing system for main app
const path = require("path"); // To access images through server rather than URL
const passport = require("passport"); //to handle sign in authentication
const { localStrategy, jwtStrategy } = require("./middleware/passport"); // authentication mechanism / strategy

// MAIN APP
const app = express(); // create express app to run backend

// MIDDLEWARE
app.use(cors()); // to activate connection between backend and browser
app.use(bodyParser.json()); // parse the body of URL as JSON data
app.use(passport.initialize()); // initialize authentication (must be above user routes)
passport.use(localStrategy); //
passport.use(jwtStrategy);

//--------------------- Routers
app.use(userRoutes); //this router will only be called if the request starts with /users
app.use("/gyms", gymRoutes); //this router will only be called if the request starts with /gyms
app.use("/classes", classRoutes); //this router will only be called if the request starts with /classes
app.use("/types", typeRoutes); //this router will only be called if the request starts with /types
app.use("/media", express.static(path.join(__dirname, "media"))); // this router allows access to media

//--------------------- Error
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

//--------------------- Not found
app.use((req, res, next) => {
  next({ status: 404, message: "Path not found" });
});

// DATABASE SYNC
db.sequelize.sync();
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });

// VIEW APPLICATION IN BROWSER
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
