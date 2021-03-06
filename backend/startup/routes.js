const express = require('express');
const cors = require('cors');
const users = require('../routes/users');
const auth = require('../routes/auth');
const movies = require("../routes/movies");
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const rentals = require('../routes/rentals');
const returns = require('../routes/returns')
const error = require('../middlewares/error');



module.exports = function(app) {
    app.use(express.urlencoded({extended : false}));
    app.use(cors());
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/movies', movies);
    app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/api/rentals', rentals);
    app.use('/api/returns', returns);
    app.use(error)
    }