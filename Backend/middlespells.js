const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const identificationSpell = async (req, res, next) => {
  try {
    const { magical_password } = req.body;

    if (!magical_password) {
      return res.status(400).send("The Authentification Spell has failed !");
    }
    const hashed_magical_password = await argon2.hash(
      magical_password,
      hashingOptions
    );

    req.body.hashed_magical_password = hashed_magical_password;
    delete req.body.magical_password;

    return next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Identification Spell Internal Server Error");
    return null;
  }
};

const spellOfPasswordChecking = async (req, res) => {
  try {
    const { magical_password } = req.body;
    const { hashed_magical_password } = req.user[0];

    if (!hashed_magical_password || !magical_password) {
      return res.status(400).send("Spell of password checking ERROR");
    }

    const spellSuccessful = await argon2.verify(
      hashed_magical_password,
      magical_password
    );

    if (spellSuccessful) {
      console.log("bravo");
      const user = { ...req.user };
      delete user.hashed_magical_password;
      const payload = { cargo: req.user };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1000",
      });
      res.status(200).send({ token });

      return null;
    }
    res.status(401).send("Erreur du Spell");
    return null;
  } catch (err) {
    console.error(err);
    res.status(500).send("Servor Error, gods have forsaken us");
    return null;
  }
};

module.exports = {
  identificationSpell,
  spellOfPasswordChecking,
};
