const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config')


const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 5,
        maxLenght: 50,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minLength: 5,
        maxLenght: 245,
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
   isAdmin: {
       type: Boolean,
       default: false
   }
});

//generate user token
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this.id,isAdmin: this.isAdmin, email: this.email, username: this.username }, config.get('jwtPrivateKey'));
    return token
}
const User = mongoose.model('User', userSchema);


//Specify limits to user entry and validate 
function validateUser(user) {
    const schema = {
        username: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(245).required().email(),
        password: Joi.string().min(5).max(50).required()
    };
  return Joi.validate(user, schema);
    
}

exports.User = User;
exports.validate = validateUser;