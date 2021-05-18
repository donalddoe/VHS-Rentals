const auth = require('../middlewares/auth');
const {Rental, validate} = require('../models/rental'); 
const {Movie} = require('../models/movies'); 
// const {Customer} = require('../models/customer'); 
const {User} = require('../models/users'); 

const mongoose = require('mongoose');
const Fawn = require('fawn')
const express = require('express');
const router = express.Router();
const admin = require('../middlewares/admin')

Fawn.init(mongoose);

router.get('/', auth, async (req, res) => {
  const rentals = await Rental.find().sort('-dateOut');
  res.send(rentals);
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send('Invalid User.');
  
  if(user.wallet === 0) return res.status(400).send('Not enough funds')

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send('Invalid movie.');

  if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

  let rental = new Rental({ 
    userid: user.userId,
    movieid: movie.movieId,
    // daysBooked: rental.daysBooked
    // total:
  });

  try {
    new Fawn.Task()
    .save('rentals', rental)
    .update('movies', { _id: movie.id}, {
      $inc: { numberInStock: -1,  }
    })
    .run();
      
      res.send(rental);
  }
  catch (ex) {
    res.status(500).send('Something failed')
  }

});

router.get('/:id', auth, async (req, res) => {
  const rental = await Rental.findById(req.params.id);

  if (!rental) return res.status(404).send('The rental with the given ID was not found.');

  res.send(rental);
});

module.exports = router; 