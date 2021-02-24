//Imports
const express = require("express"); // application to run backend
const cors = require("cors"); // To give a browser access to the backend
const bodyParser = require("body-parser"); // Middleware for Express to handle the body of a url
const db = require("./db/models"); //connect the database to the app
const noobRoutes = require("./routes/noobRoutes"); // mini app to handle all routing system for main app
const userRoutes = require("./routes/userRoutes"); // mini app to handle all routing system for main app

// Main app
const app = express(); // create express app to run backend

// Methods / Middleware
app.use(cors()); // to activate connection between backend and browser
app.use(bodyParser.json()); // parse the body of URL as JSON data
app.use("/noobs", noobRoutes); //this router will only be called if the request starts with /noobs
app.use("/users", userRoutes); //this router will only be called if the request starts with /users

// Routes
//------------- Initial message
app.get("/", (req, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

// DATABASE SYNC------------------------------
// db.sequelize.sync();
// db.sequelize.sync({ alter: true });
db.sequelize.sync({ force: true });

// to see the application
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
