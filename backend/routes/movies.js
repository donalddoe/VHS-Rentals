
const {Movie, validate} = require('../models/movies'); 
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')
const express = require('express');
const router = express.Router();


router.get('/add-movie',  async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
  });
  //Add a new movie
  router.post('/add-movie', auth, async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');
  
    const movie = new Movie({ 
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name
      },
      // year: res.body.year,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate
    });
     await movie.save();
    
    res.send(movie);
  });
  //Update a movie
  router.put('/update-movie/:id',[auth, admin], async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');
  
    const movie = await Movie.findByIdAndUpdate(req.params.id,
      { 
        title: req.body.title,
        genre: {
          _id: genre._id,
          name: genre.name
        },
        year: res.body.year,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
      }, { new: true });
  
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    
    res.send(movie);
  });
  // delete a single movie
  router.delete('/delete-movie/:id', auth, async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
  
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  
    res.send(movie);
  });
  //Get a single Movie
  router.get('/single-movie/:id', auth, async (req, res) => {
    const movie = await Movie.findById(req.params.id);
  
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  
    res.send(movie);
  });



module.exports = router;