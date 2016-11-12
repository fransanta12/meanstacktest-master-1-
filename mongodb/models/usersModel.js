var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var users_schema = new Schema({
    login: String,
    password: String,
    fname: String,
    lname: String,
    email: String
});

var users = mongoose.model("users",users_schema);

module.exports.users = users;