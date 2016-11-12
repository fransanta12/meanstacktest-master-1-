var mongoose= require("mongoose");
var User = require("../../mongodb/models/usersModel").users;
var Courses = require("../../mongodb/models/coursesModel").courses;
var express = require("express");
var router = express.Router();
var path = require('path');

router.get("/", function (req, res) {
  res.sendFile(path.resolve('public/views/app.html'));
});

router.get("/user", function (req, res) {
  
  User.findOne({
    login:req.session.user.login
  }, function (err, user) {
    console.log("err: " + err + ", user: " + user.lname+user.fname);
    res.json(user);
  });
});

router.get("/logout", function (req, res) {
  req.session = null;
  res.json("");
});

router.get("/listarCurso/:username", function (req, res) {
  var username=req.params.username;
  console.log("ingreso a mostrar curso");
    Courses.find({users:req.session.user.login}, function(err, docs) {
      res.json(docs);
    });
  
});

module.exports = router;
