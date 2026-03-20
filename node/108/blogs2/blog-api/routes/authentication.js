import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    req.users = await req.db.collection("users");

    next();
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const result = await req.users.findOne({ userName: req.body.userName });

    if (result) {
      //console.log(results);
      if (await bcrypt.compare(req.body.password, result.hash)) {
        req.session.userName = result.userName;
        return res.sendStatus(204);
      }
    }

    const error = new Error("Invalid userName and/or Password");
    error.statusCode = 401;
    throw error;
  } catch (e) {
    next(e);
  }
});

router.post("/logout", (req, res, next) => {
  req.session.destroy();
  res.sendStatus(204);
});

router.post("/register", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    console.log(hash);

    const results = await req.users.insertOne({
      userName: req.body.userName,
      hash,
    });

    console.log(results);

    res.sendStatus(201);
  } catch (e) {
    console.log(e);

    if (e.code === 11000) {
      const error = new Error();
      error.message = `UserName ${req.body.userName} is not available`;
      error.statusCode = 409;
      return next(error);
    }

    next(e);
  }
});
export default router;
