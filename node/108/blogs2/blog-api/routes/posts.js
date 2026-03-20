import express from "express";
import authenticated from "../authenticated.js";

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    req.posts = await req.db.collection("posts");

    next();
  } catch (e) {
    next(e);
  }
});

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const posts = await req.posts.find().toArray();
      res.send(posts);
    } catch (e) {
      next(e);
    }
  })
  .post(authenticated, async (req, res, next) => {
    try {
      const newBody = {
        ...req.body,
        date: new Date(),
        author: req.session.userName
      };
      await req.posts.insertOne(newBody);

      req.io.emit("post", newBody);

      res.status(201).send(newBody);
    } catch (e) {
      next(e);
    }
  });

export default router;
