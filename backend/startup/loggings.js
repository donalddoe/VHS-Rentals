const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    winston.handleExceptions(
      new winston.transports.Console({ colorize:true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtException.log' })
      )
      
      process.on('unhandledRejection', (ex) => {
       throw ex
      })
      
      winston.add(winston.transports.File, { filename: 'logfile.log'});
      // winston.add(winston.transports.MongoDB, {
      //   db: "mongodb+srv://tutshop:jyChsRHCWQBBltbg@shop.ddi81.mongodb.net/User?retryWrites=true&w=majority",
      //   // options: { useUnifiedTopology: true },
      //   level: 'info',
      
      // })
}