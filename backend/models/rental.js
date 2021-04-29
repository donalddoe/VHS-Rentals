const Joi = require('joi');
const moment = require('moment');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');



const rentalSchema =  new mongoose.Schema({
  user: { 
    type: new mongoose.Schema({
      username: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 245,
    },
       
    }),  
    required: true
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true, 
        minlength: 5,
        maxlength: 255
      },
      dailyRentalRate: { 
        type: Number, 
        required: true,
        min: 0,
        max: 255
      },
    }),
    required: true
  },
  daysBooked: {
    type: String,
    require: true
  } ,
  total: {
    type: Number,
    min: 0
  },
  dateOut: { 
    type: Date, 
    required: true,
    default: Date.now
  },
 
  rentalFee: { 
    type: Number, 
    min: 0
  }
})


rentalSchema.statics.lookup = function(userId, movieId) {
  return this.findOne({
    'user._id': userId,
    'movie._id': movieId
  });
}

rentalSchema.methods.return = function() {
  this.dateReturned = new Date();

  const rentalDays = moment().diff(this.dateOut, 'days');
  this.rentalFee = rentalDays * this.movie.dailyRentalrate;
}

const Rental = mongoose.model('Rental', rentalSchema);

function validateRental(rental) {
  const schema = {
    userId: Joi.objectId().required(),
    movieId: Joi.objectId().required()
  };

  return Joi.validate(rental, schema);
}

exports.Rental = Rental; 
exports.validate = validateRental;