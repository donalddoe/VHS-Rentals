const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type:String,
        required: true
    },

    genre: {
        type:String,
        required: true
    },

     cost: {
        type:String,
        required: true
    },

    Year: {
        type:String,
        required: true
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
})

const movieModel  = mongoose.model("Movie", movieSchema);

module.exports = movieModel;