const express = require("express");
const router = express.Router();

const articlecontroller = require("../02.controllers/articlecontroller");
const usercontroller = require("../02.controllers/usercontroller");

router.get("/users", usercontroller.browse);
router.get("/users/:id", usercontroller.read);
router.post("/user", usercontroller.add);
router.delete("/user/:id", usercontroller.destroy);

router.get("/articles", articlecontroller.browser);
router.get("/articles/:id", articlecontroller.read);
router.post("/article", articlecontroller.add);
router.delete("/article/:id", articlecontroller.destroy);
