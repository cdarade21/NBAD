var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var session = require('express-session');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var theCourse = require('./../models/Course');
var app = express()

app.use(session({secret: "CourseStructure"}))
router.post('/', urlencodedParser, function (req, res) {
  if(!req.body.courseID) {
    console.log("Hello");
    res.render('index',{qs: req.query});
  }
  else {
    console.log(req.body);
    res.render('details',{theCourse: req.body});
  }
});

router.get('/', function (req, res) {
  res.render('details',{theCourse: req.query});
});

router.post('/', urlencodedParser, function (req, res) {
  if(!req.body.courseID) {
    console.log("Hello");
    res.render('index',{qs: req.query});
  }
  else {
    console.log(req.body);
    res.render('details',{theCourse: req.body});
  }
});

module.exports = router;
