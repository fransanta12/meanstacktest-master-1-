var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var courses_schema = new Schema({
    code: String,
    name: String,
    description: String,
    launch: String,
    users: [{ type: String, ref: 'users' }],
});

var courses = mongoose.model("courses",courses_schema);

module.exports.courses = courses;