const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const admin = new Schema(
    { 
  username: {
    type:String,
    required: true
  },
  password: {
    type: String,
    require: true,
    minLength: 5,
    maxLenght: 2000,
},
date:{
  type:Date,
  default:Date.now
},
role: {
 type: String
}
  });
  
  module.exports = mongoose.model("Admin", admin);

 