import express from "express";

const app = express();

app.use((req, res, next) => {
    let one = Number(req.query.one ?? req.params.one);
    let two = Number(req.query.two ?? req.params.two);

    if (isNaN(one) || isNaN(two)) {
        return res.status(400).send('<h2 style="color:red">Invalid input</h2>');
    }

    req.one = one;
    req.two = two;
    next();
});



app.get("/add", (req, res, next) => {
  let one = req.one;
  let two = req.two;
  res.send(`<h2 style="color:blue">${one} + ${two} = ${one + two}</h2>`);
});

app.get("/subtract/:one/:two", (req, res, next) => {
  let one = req.one;
  let two = req.two;
  res.send(`<h2 style="color:blue">${one} - ${two} = ${one - two}</h2>`);
});

app.get("/calc", (req, res, next) => {
  let one = req.one;
    let two = req.two;
    let result;
  switch (req.query.oper) {
    case "+":
      result = one + two;
      break;
    case "-":
          result = one - two;
      break;
    case "*":
      result = one * two;
      break;
    case "/":
      if (two === 0) {
        return res.status(400).send('<h2 style="color:red">Cannot divide by zero</h2>');
      }
      result = one / two;
      break;
    default:
      return res.status(400).send('<h2 style="color:red">Invalid operation</h2>');
  }
  res.send(`<h2 style="color:blue">${one} ${req.query.oper} ${two} = ${result}</h2>`);
});

app.listen(80);
