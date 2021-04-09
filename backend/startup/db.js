const mongoose = require('mongoose');
const config = require('config')
const winston = require('winston');


const connectDB = async () => {
    try {
        const db = config.get('db')
        const connection = await mongoose.connect( db,{
              useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    winston.info(`MongoDB conneted: ${connection.connection.host}`) 
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB;