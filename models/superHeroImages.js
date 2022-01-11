const mongoose = require('mongoose');

const SuperHeroImageSchema = new mongoose.Schema({
    image : {
        type : Object
     }
})

module.exports = HeroImage = mongoose.model('heroImage',SuperHeroImageSchema)

