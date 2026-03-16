import express from "express";
import dns from "node:dns";
import http from "http";
import { MongoClient } from "mongodb";
import cors from "cors";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(async (req, res, next) => {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);
  try {
    const db = await client.db("blog");

    req.posts = await db.collection("posts");

    next();
  } catch (e) {
    next(e);
  }
});

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/posts", async (req, res, next) => {
  try {
    const posts = await req.posts.find().toArray();
    res.send(posts);
  } catch (err) {
    return next(err);
  }
});

app.post("/posts", async (req, res, next) => {
  try {
    req.body.date = new Date();
    req.body.author = "PCS";
    const post = await req.posts.insertOne(req.body);

    res.status(201).send({ _id: post.insertedId, ...req.body });
  } catch (err) {
    return next(err);
  }
});

app.use(function (req, res, next) {
  const error = new Error("404 - Not Found");
  error.statusCode = 404;
  next(error);
});

// error handler
app.use(function (err, req, res, next) {
  res.statusCode = err.statusCode || 500;
  res.send(err.message);
});

server.listen(8080);
