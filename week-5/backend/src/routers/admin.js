const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/admin");
const authCheck = require("../middleware/auth");
const upload = require("../middleware/upload");
const response = require("../utils/response");
const multer = require("multer");

routers.get("/movies", authCheck("admin"), controllers.getOrSort);
routers.post(
  "/movies",
  authCheck("admin"),
  upload.single("image"),
  controllers.add
);

module.exports = routers;
