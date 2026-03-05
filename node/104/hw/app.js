var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const { title } = require("process");

var app = express();

app.use(
  session({
    secret: "foo",
    resave: false,
    saveUninitialized: false,
  }),
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.name = req.session.name;
  res.locals.username = req.session.username;
  res.locals.notLoggedIn = !res.locals.username;
  next();
});

app.post("/login", require("./login"));
app.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/changeName", (req, res, next) => {
  res.render("layout", {
    title: "Change Name",
    partials: {
      content: "changeName",
    },
  });
});
app.post("/changeName", (req, res, next) => {
  req.session.name = req.body.name;
  res.redirect('/')
});

app.post("/signup", require("./signup"));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const loggedInOnly = (req, res, next) => {
  if (req.session.username) {
    return next();
  }
  res.redirect("/");
};



app.get("/admin", loggedInOnly, (req, res, next) => {
  let count = req.session.count ?? 0;
  count++;
  req.session.count = count;
  res.locals.count = req.session.count;
  res.render("layout", {
    title: "Admin",
    partials: {
      content: "admin",
    },
  });

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
