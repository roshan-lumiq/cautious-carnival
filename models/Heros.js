const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    SuperHeros: [String]
    
})

module.exports = Hero = mongoose.model('hero',HeroSchema)

