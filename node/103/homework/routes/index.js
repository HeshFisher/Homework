var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    title: 'Visit Counter', partials: {
      content: 'index'
  }});
});

router.get("/name", function (req, res, next) {
  res.render("layout", {
    title: "Change Name",
    partials: {
      content: "name",
    },
  });
});

module.exports = router;
