const Joi = require("joi");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");
const { Rental } = require("../models/rental");
const { Movie } = require("../models/movies");
const express = require("express");
const router = express.Router();

router.post("/", [auth, validate(validateReturn)], async (req, res) => {
  const rental = await Rental.lookup(req.body.userid, req.body.movieid);

  if (!rental) return res.status(404).send("Rental not found");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed!");

  rental.return();
  await rental.save();

  await Movie.update(
    { _id: rental.movie._id },
    {
      $inc: { numberInStock: 1 },
    }
  );

  return res.status.send(rental);
});

function validateReturn(req) {
  const schema = {
    userId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
