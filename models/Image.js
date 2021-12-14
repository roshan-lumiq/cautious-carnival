const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    image: {
        type : String,
        required : true
    },
    number : {
        type : Number,
        required : true
    }
})

module.exports = Image = mongoose.model('image',ImageSchema)

