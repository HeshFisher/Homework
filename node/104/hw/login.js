const pool = require("./pool.js");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      "SELECT password FROM users WHERE username = ?",
      [req.body.username],
    );
    req.session.name = req.body.name;
    if (results.length) {
      if (await bcrypt.compare(req.body.password, results[0].password)) {
        req.session.username = req.body.username;
        req.session.name = req.body.name || req.body.username;
        return res.redirect("/admin");
      }
    }
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};
