var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserLike = require("./userLike");

//STILL UNSURE ABOUT WHERE THIS REFERENCED DATA WORKS
var UserSchema = new Schema({
  id: String,
  access_token: String,
  firstName: String,
  lastName: String,
  gender: String,
  birthday: String,
  sexualPref: String,
  email: String,
  location: String,
  profilePic: String,
  password_digest: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
