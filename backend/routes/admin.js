const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../models/users');
const Admin = require('../models/admin');
const Movie = require('../models/movies');






   //Add a Movie     
 router.post('/add-movie', (req, res, next) => {
        Movie.create(req.body, (error, data) => {
            if(error){
                return next(error)
            } else {
                res.json(data)
            }
        })
    })

//Get all Movies
router.get("/all-movies", (req,res) => {
  Movie.find((error, data) => {
      if(error){
          return next(error)
      }else {
          res.json(data)
      }
  })
});


//Get a Single Movie.
router.get('/single-movie/:id', (req, res) => {
    Movie.findById(req.params.id, (error, data) => {
        if(error){
            return next(error)
        }else {
            res.json(data)
        }
    }); 
    });

    //Update or Edit a movie
    router.put('/update-movie/:id', (req, res, next) => {
        Movie.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
        (error, data) => {
            if(error){
                return next(error);
                console.log(error);
            }else {
                res.json(data)
                res.send('Movie updated successfully!')
            }
        }
        )
    })

    //Delete a movies
router.delete('/delete-movie/:id', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
          } else {
            res.status(200).json({
              msg: data
            })
    }
})
})




module.exports = router;