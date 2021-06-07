const Joi = require("joi");
const moment = require("moment");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new mongoose.Schema({
  userid: { type: Schema.Types.ObjectId, ref: "User" },
  movieid: { type: Schema.Types.ObjectId, ref: "Movie" },

  daysBooked: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    min: 0,
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now,
  },

  rentalFee: {
    type: Number,
    min: 0,
  },
});

rentalSchema.statics.lookup = function (userId, movieId) {
  return this.findOne({
    "user._id": userId,
    "movie._id": movieId,
  });
};

rentalSchema.methods.return = function () {
  this.dateReturned = new Date();

  const rentalDays = moment().diff(this.dateOut, "days");
  this.rentalFee = rentalDays * this.movie.dailyRentalrate;
};

const Rental = mongoose.model("Rental", rentalSchema);

function validateRental(rental) {
  const schema = {
    userid: Joi.objectId().required(),
    movieid: Joi.objectId().required(),
    daysBooked: Joi.string().required(),
    total: Joi.number().required(),
  };

  return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;
