const Joi = require('joi');
const mongoose = require('mongoose');
// const {genreSchema} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 2,
    maxlength: 255
  },
  genre: { 
    type: String,  
    required: true
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
  },
    year: {
    type: String,
    requred: true,
  },
  plot: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).max(50).required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
    year: Joi.string().required(),
    plot: Joi.string().required(),
    poster: Joi.string().required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;