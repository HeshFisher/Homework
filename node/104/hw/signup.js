const pool = require("./pool.js");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    const [results] = await pool.execute(
      "INSERT INTO users(username,password) VALUES(?,?)",
      [req.body.username, hash],
    );
    req.session.username = req.body.username;
    req.session.name = req.body.name || req.body.username;

    res.redirect("/");
  } catch (e) {
    if (e.errno === 1062) {
      res.render("layout", {
        partials: { content: "index" },
        error: `Username ${req.body.username} already exists`,
      });
    }
    next(e);
  }
};
