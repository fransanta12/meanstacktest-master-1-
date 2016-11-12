var mongojs = require('mongojs');
var db = mongojs("pruebalogin",["usuarios"]);
var express = require("express");
var router = express.Router();
var path = require('path');

router.get("/",function(req,res){
	res.sendFile(path.resolve('public/views/app.html'));
});

router.get("/user",function(req,res){
	db.usuarios.findOne({_id: mongojs.ObjectId(req.session.user_id)},function(err,user){
		res.json(user);
	});
});

router.get("/logout",function(req,res){
	req.session =null;
	res.json("");
});

module.exports = router;