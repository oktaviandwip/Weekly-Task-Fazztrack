const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/users");

routers.get("/", controllers.get);
routers.post("/", controllers.add);
routers.post("/sign-up", controllers.add);
routers.put("/:id", controllers.update);
routers.delete("/:id", controllers.delete);

module.exports = routers;
