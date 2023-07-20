require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./src/01.navigation/routes.js");

const app = express();
const port = process.env.APP_PORT || 3000;


app.use(cors({
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
}));


app.use(express.json());


app.use(router);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
