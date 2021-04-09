const winston = require('winston');
const express = require('express');
const connectDB = require('./startup/db')

const app = express();

connectDB();








const port = process.env.PORT || 4000;

const server = app.listen(port, () => winston.info(`Server is up and running on port${port}`))

module.exports = server