let mongoose = require('mongoose');

let users = mongoose.Schema({
  username:String,
  password:String
},
{

});

module.exports = mongoose.model('user', users);

