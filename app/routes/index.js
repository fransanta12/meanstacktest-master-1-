var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require("../../mongodb/models/usersModel").users;
var cookieSession = require("cookie-session");
var session_middleware = require("../middlewares/session");
var router_app = require("./router_app");

// app/routes/index.js

'use strict';
var path = require('path');

module.exports = function (app) {

  app.use(cookieSession({
    name: "login",
    keys: ["llave-1", "llave-2"]
  }));

  app.get('/', function (req, res) {
    res.sendFile(path.resolve('public/views/index.html'));
  });

  app.post('/login', function (req, res) {

    User.findOne({
        login: req.body.username,
        password: req.body.password
      },
      function (err, user) {
      console.log("err: "+err+", user: "+user);
        if (user != null) {
          console.log("entro a index.js");
          req.session.authenticated = true;
          req.session.user = user;
          //req.session.user_login = user.login;
          res.redirect("/app");
        } else {
          res.sendFile(path.resolve('public/views/index.html'));
        }
      }
    );
  });
  app.use("/app", session_middleware);
  app.use("/app", router_app);

}
