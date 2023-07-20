const express = require("express");
const router = express.Router();

const articleController = require("../02.controllers/articlecontroller.js");
const userController = require("../02.controllers/usercontroller.js");

router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

router.get("/article", articleController.getAllArticles);
router.get("/article/:id", articleController.getOneArticle);
router.post("/article", articleController.createArticle);
router.put("/article/:id", articleController.updateArticle);
router.delete("/article/:id", articleController.deleteArticle);

module.exports = router;
