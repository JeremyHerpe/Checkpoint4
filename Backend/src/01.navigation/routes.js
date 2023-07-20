const express = require("express");
const router = express.Router();

const articleController = require("../02.controllers/articlecontroller.js");
const userController = require("../02.controllers/usercontroller.js");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getOneUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

router.get("/articles", articleController.getAllArticles);
router.get("/articles/:id", articleController.getOneArticle);
router.post("/articles", articleController.createArticle);
router.put("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);

module.exports = router;
