const database = require("../../database");

// Create
const createArticle = (req, res) => {
  const { article_name, article_description, article_picture, article_price } =
    req.body;
  database
    .query(
      "INSERT INTO articles (article_name, article_description, article_picture, article_price) VALUES (?, ?, ?, ?)",
      [article_name, article_description, article_picture, article_price]
    )
    .then(() => res.status(201).send("Article created"))
    .catch(err => res.status(500).send("Error creating a new article: ", err));
};

// Read
const getAllArticles = (req, res) => {
  database
    .query("SELECT * FROM articles")
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        console.warn("No articles found in the database");
        res.status(404).json([]);
      }
    })
    .catch(err =>
      res.status(500).send("Error getting articles from the database: ", err)
    );
};

// Read One
const getOneArticle = (req, res) => {
  const id = req.params.id;
  database
    .query("SELECT * FROM articles WHERE article_id=?", [id])
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        console.warn("No article found in the database with the provided ID");
        res.status(404).json([]);
      }
    })
    .catch(err =>
      res.status(500).send("Error getting the article from the database: ", err)
    );
};

// Update
const updateArticle = (req, res) => {
  const id = req.params.id;
  const { article_name, article_description, article_picture, article_price } =
    req.body;

  database
    .query(
      "UPDATE articles SET article_name=?, article_description=?, article_picture=?, article_price=? WHERE article_id = ?",
      [article_name, article_description, article_picture, article_price, id]
    )
    .then(() => res.send("Article updated"))
    .catch(err => res.status(500).send("Error updating article: ", err));
};

// Delete
const deleteArticle = (req, res) => {
  const id = req.params.id;

  database
    .query("DELETE FROM articles WHERE article_id = ?", [id])
    .then(() => res.send("Article deleted"))
    .catch(err => res.status(500).send("Error deleting article: ", err));
};

module.exports = {
  createArticle,
  getAllArticles,
  updateArticle,
  deleteArticle,
  getOneArticle,
};
