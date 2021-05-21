
const auth = require('../middlewares/auth')
const _  = require('lodash');
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/users');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Get all users
router.get('/', auth, async (req, res) => {
  const user = await User.find().select('-password');
  res.send(user)
})



router.post('/', async (req, res) => {
   const { error } = validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   //find a unique email
   let user = await User.findOne({ email: req.body.email });
   if (user) return res.status(400).send('User already registered');

    //Lodash helps to return the req.body
    user = new User(_.pick(req.body, ['username', 'email', 'password', 'wallet']))
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await user.save();

    //sending user token
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['id', 'username', 'email', 'wallet']))
});

//Update a single user

router.put('/:id', auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id,
    { 
      username: req.body.username,
      email: req.body.email,
      // password: req.body.password,
      wallet: req.body.wallet
    }, { new: true });

  if (!user) return res.status(404).send('The user with the given ID was not found.');
  
  res.send(user);
});

// Delete a signle user

router.delete('/:id', auth, async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
});

//Get a single User
router.get('/:id', auth, async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
});

module.exports = router;