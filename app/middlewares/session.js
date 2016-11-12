var User= require("../../mongodb/models/usersModel").users;

var path = require('path');

module.exports = function(req,res,next){
  
	if(!req.session.user){
		res.sendFile(path.resolve('public/views/index.html'));
	}else{
		User.findOne({_id: req.session.user._id},function(err,user){
			if(err){
              
             res.sendFile(path.resolve('public/views/index.html'));
			}else{
              
				res.locals = { user: user }
				next();
			}
		});
	}
}