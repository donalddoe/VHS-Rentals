const express = require('express');
const cors = require('cors');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middlewares/error');
const mongoose = require('mongoose');


module.exports = function(app) {
    app.use(express.urlencoded({extended : false}));
    app.use(cors());
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error)
    }