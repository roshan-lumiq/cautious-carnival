const express = require('express');
const Image = require('../models/Image')
const Hero = require('../models/Heros')
const HeroImage = require('../models/superHeroImages')
const { getImage, addImage, updateImage, deleteImage, getSuperHero, getAllImages, addHero } = require('../controller/image');
// const { check, validationResult } = require('express-validator');
const validator = require('../validator/validation');
const validator2 = require('../validator/heroValidator')
const Heros = require('../models/Heros');
const res = require('express/lib/response');

const router = express.Router()

// get image by number route

router.post('/hero',validator2, addHero)


router.get('/images', getAllImages)



router.get('/:number', getImage)


//add image and number route


router.post('/image', validator, addImage)

//update image url by number

router.put('/image', validator, updateImage)

//delete image by number

router.post('/image1', deleteImage)

//superhero
router.post('/superhero', getSuperHero)









module.exports = router;

























// const ls= [{ image: '1.jpg',  number : 1234 }, { image: '2.jpeg', number : 2234}, {image: '3.jpeg', number : 3234  }, { image: '4.jpg', number : 4234 }, { image: '5.jpg',number : 5234 }, {image: '6.jpg', number : 6234 }, {image: '7.jpeg',number : 7234 }, { image: '8.jpg',number : 8234 }, { image: '9.jpg',number : 9234 }]