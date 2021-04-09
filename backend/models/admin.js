const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const admin = new Schema(
    { 
    username: String,
    password: String, 
    created_at: String, 
    role: String 
  });
  
  module.exports = mongoose.model("Admin", admin);