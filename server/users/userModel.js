var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  phone:{
    type: Number,
    required: true,
    unique : true
  }
});

module.exports = mongoose.model('users', UserSchema);