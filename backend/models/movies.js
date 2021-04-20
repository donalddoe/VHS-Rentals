const Joi = require('joi');
const mongoose = require('mongoose');
// const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: String,  
    required: true
  },
  // year: {
  //   type: String,
  //   requred: true,
  //   min: 2,
  //   max: 255
  // },
  plot: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  poster: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  numberInStock: { 
    type: Number,   
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  }
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genre: Joi.string().required(),
    year: Joi.string().min(2).max(50).required(),
    plot: Joi.string().min(2).max(50).required(),
    poster: Joi.string().min(2).max(50).required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;