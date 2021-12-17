const mongoose = require('mongoose');

const SuperHeroImageSchema = new mongoose.Schema({
    image : Object
})

module.exports = HeroImage = mongoose.model('heroImages',SuperHeroImageSchema)

