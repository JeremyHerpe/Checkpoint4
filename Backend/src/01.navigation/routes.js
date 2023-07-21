const express = require("express");
const router = express.Router();

const articleController = require("../02.controllers/articlecontroller.js");
const userController = require("../02.controllers/usercontroller.js");
const {
  identificationSpell,
  spellOfPasswordChecking,
} = require("../../middlespells.js");

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getOneUser);
router.post("/users", identificationSpell, userController.createUser);
router.post(
  "/users/login",
  userController.spellOfEmailChecking,
  spellOfPasswordChecking
);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

router.get("/articles", articleController.getAllArticles);
router.get("/articles/:id", articleController.getOneArticle);
router.post("/articles", articleController.createArticle);
router.put("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);

module.exports = router;
