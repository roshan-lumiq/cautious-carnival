const express = require('express');
const Hero = require('../models/Heros')
const HeroImage = require('../models/superHeroImages');
const { getSuperHero, addHero } = require('../controller/image');
const router = express.Router()

// const {validator2} = require('../validator/validator');
const validator2 = require('../validator/heroValidator')

router.post('/hero', validator2, addHero)

router.post('/superhero', getSuperHero)

module.exports = router;

