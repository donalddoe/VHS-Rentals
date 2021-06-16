const Joi = require("joi");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const { Rental } = require("../models/rental");
const { Movie } = require("../models/movies");
const express = require("express");
const router = express.Router();



router.post("/", [auth, validate(validateReturn)], async (req, res) => {

  
    // return rentalSchema.findOne({
    //   "user._id": userid,
    //   "movie._id": movieid,
    // });
  

  const rental = await Rental.findOne(
    {"userid": req.body.userid,
    "movieid": req.body.movieid});

  if (!rental) return res.status(404).send("Rental not found");
console.log(rental)
  
  if (rental.dateReturned)
    return res.status(400).send("Return already processed!");

  // await rental.save();
  

  await Movie.updateOne(
    { _id: rental.movieid }, {
      $inc: { numberInStock: 1 },
  });

  await Rental.updateOne(
    {_id: rental._id}, 
   {$set:  {
    dateReturned: Date.now()
  }}
  )

  return res.send(rental);
});

function validateReturn(req) {
  const schema = {
    userid: Joi.objectId().required(),
    movieid: Joi.objectId().required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
