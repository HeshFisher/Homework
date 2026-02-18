import express from "express";
import pool from "../pool.js";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    const [results] = await pool.execute("SELECT name,category FROM recipes");
    res.json(results);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      "SELECT name,category FROM recipes WHERE id = ?",
      [req.params.id],
    );

    if (!results.length) {
      res.statusCode = 404;
      res.send(`can not find recipe ${req.params.id}`);
    }
    res.json(results[0]);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const [results] = await pool.execute(
      "INSERT INTO recipes(name,category, ingredients, instructions) VALUES (?,?,?,?)",
      [
        req.body.name,
        req.body.category,
        req.body.ingredients,
        req.body.instructions,
      ],
    );
    res.json(req.body);
  } catch {
    return next(err);
  }
});

// router.put("/:id", async (req, res, next) => {
//   try {
//     const [results] = await pool.execute(
//       "INSERT INTO recipes(name,category, ingredients, instructions) VALUES (?,?,?,?)",
//       [
//         req.body.name,
//         req.body.category,
//         req.body.ingredients,
//         req.body.instructions,
//       ],
//     );
//     res.json(req.body);
//   } catch {
//     return next(err);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const [results] = await pool.execute(
//       "INSERT INTO recipes(name,category, ingredients, instructions) VALUES (?,?,?,?)",
//       [
//         req.body.name,
//         req.body.category,
//         req.body.ingredients,
//         req.body.instructions,
//       ],
//     );
//     res.json(req.body);
//   } catch {
//     return next(err);
//   }
// });

export default router;
