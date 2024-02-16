const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    Author:{
        type:String,
        required:true,
    },
    BookTitle:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    Description:{
        type:String,
    },
    Edition:{
        type:String,
        
    }
})

module.exports = mongoose.model("Book",bookSchema);