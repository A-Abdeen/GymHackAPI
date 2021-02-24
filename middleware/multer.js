//IMPORT
const multer = require("multer"); //middleware responsible for uploading files.

//a method that gives us full control on storing files
const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

// Initialize upload variable
const upload = multer({
  storage,
});

module.exports = upload;
