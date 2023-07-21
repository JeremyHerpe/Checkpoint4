const database = require("../../database");

// Create
const createUser = (req, res) => {
  const { user_name, user_email, hashed_magical_password } = req.body;
  database
    .query(
      "INSERT INTO users (user_name, user_email, hashed_magical_password) VALUES (?, ?, ?)",
      [user_name, user_email, hashed_magical_password]
    )
    .then(() => res.status(201).send("User created"))
    .catch(err => res.status(500).send("Error creating a user: ", err));
};

// Read
const getAllUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        console.warn("No users found in the database");
        res.status(404).json([]);
      }
    })
    .catch(err =>
      res.status(500).send("Error getting users from the database: ", err)
    );
};

// Read One
const getOneUser = (req, res) => {
  const id = req.params.id;
  database
    .query("SELECT * FROM users WHERE user_id=?", [id])
    .then(([result]) => {
      if (result.length) {
        res.status(200).json(result);
      } else {
        console.warn("No user found in the database with the provided ID");
        res.status(404).json([]).send("ha c'est relou");
      }
    })
    .catch(err =>
      res.status(500).send("Error getting the user from the database: ", err)
    );
};

// Update
const updateUser = (req, res) => {
  const id = req.params.id;
  const { user_name, user_email } = req.body;

  database
    .query("UPDATE users SET user_name=?, user_email=? WHERE user_id=?", [
      user_name,
      user_email,
      id,
    ])
    .then(() => res.send("User updated"))
    .catch(err => res.status(500).send("Error updating the user: ", err));
};

// Delete
const deleteUser = (req, res) => {
  const id = req.params.id;

  database
    .query("DELETE FROM users WHERE user_id=?", [id])
    .then(() => res.send("User deleted"))
    .catch(err => res.status(500).send("Error deleting the user: ", err));
};

// Cheking Email before login

const spellOfEmailChecking = (req, res, next) => {
  const { user_email } = req.body;

  if (!user_email) {
    return res.status(400).send("User email is missing, bro");
  }

  database
    .query("SELECT * FROM users WHERE user_email = ?", [user_email])
    .then(users => {
      if (users.length > 0) {
        req.user = users[0];
        next();
      } else {
        res.status(401).send("Error 401: Email not found in the database.");
      }
    })
    .catch(err => {
      console.error("ho comment c'est relou", err);
      res
        .status(500)
        .send(
          "Spell of email checking, error retrieving data from the database."
        );
    });
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  spellOfEmailChecking,
};
