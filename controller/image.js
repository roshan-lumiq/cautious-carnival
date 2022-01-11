const Image = require('../models/Image')
const Heros = require('../models/Heros')
const HeroImage = require('../models/superHeroImages')
const { sortHeros, getTheHero } = require('./superHero')


//GET image 
const getImage = async (req, res, next) => {
    if (isNaN(req.params.number)) {
        return res.status(400).json({ msg: 'Try a valid number!!' })
    }

    try {
        let number = req.params.number
        const image = await Image.findOne({ number }, { _id: 0, __v: 0, number: 0 })
        // console.log(number);
        if (!image) {
            return res.status(404).json({ msg: "No image found !!" })
        }
        res.send(image)
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error!!" })
    }

}

//Add image

const addImage = async (req, res) => {
    try {
        const { image, number } = req.body;
        //checking the number in db
        const num = Number(number)

        const numberCheck = await Image.findOne({ number: num }, { _id: 0, __v: 0, number: 0 })
        if (numberCheck) {
            return res.status(400).json({ msg: "Number is already used !!" })
        }
        const addImage = new Image({
            image,
            number: num
        })
        await addImage.save()
        res.status(200).json(addImage)


    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error!!" })
    }

}


//Update image url by number 

const updateImage = async (req, res) => {
    try {
        const { image, number } = req.body;
        //checking the number in db
        const num = Number(number)

        const numberCheck = await Image.findOne({ number: num }, { _id: 0, __v: 0, number: 0 })
        if (!numberCheck) {
            return res.status(400).json({ msg: "Number doesn't exist !!" })
        }
        const data = await Image.findOneAndUpdate({ number: num }, { image })
        res.status(200).json({ msg: "Updated successfully" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error!!" })
    }

}

//delete image document by number 

const deleteImage = async (req, res) => {
    try {
        const { number } = req.body;
        // console.log(req.body);
        const num = Number(number)
        // console.log(req.body);

        const data = await Image.findOneAndDelete({ number: num })
        res.status(200).json({ msg: "Deleted successfully" })
    } catch (err) {
        // console.error(err);
        res.status(500).json({ msg: "Server error!!" })
    }

}

//getting super hero

// ["stu","ghi","mno","pqr"]

// const images = { thor: `https://images.firstpost.com/wp-content/uploads/2019/04/thor380.jpg`, ironman: `https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg`,  hulk: 'https://static.wikia.nocookie.net/heroes-and-villain/images/f/fc/AoU_Hulk_01.png/revision/latest?cb=20181015193439', captainamerica: `https://images.indianexpress.com/2021/01/chris-evans-captain-america-1200.jpg`, spiderman: `https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png`, nothing: `https://www.pikpng.com/pngl/m/53-538143_trumpstickers-thumb-up-thumb-down-trump-3d-caricature.png`}


//get all images 

const getAllImages = async (req, res) => {

    try {

        const images = await Image.find({}, { _id: 0, __v: 0 })

        res.json({ images })

    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: "Internal server error!!" })

    }
}

const addHero = async(req,res)=>{
    try {


        const obj = await HeroImage.findOne()

        let {image} = obj;
        // obj.image[req.body.hero]=req.body.image
        obj.set({image:{...image,[req.body.hero]:req.body.image}})
        // console.log(obj,"here obj");
        await obj.save()

        const arr = await Heros.findOne()
        if(!arr.SuperHeros.includes(req.body.hero)){
            arr.SuperHeros.push(req.body.hero)
        }

        
        await arr.save()
        

        // console.log(obj);
        
        res.status(200).json({msg: "Super hero is now ont the list"})
        
        
    } catch (err) {
        console.error(err);
        res.status(500).json({msg: "Server error!!"})
    }
}

const getSuperHero = async (req, res, next) => {

    let heroImages = await HeroImage.findOne({},{_id:0,__v:0})
    let images = heroImages['image']

    const keys = req.body.keys


    try {
        const k =  await sortHeros(keys)
        const j = getTheHero(k, keys)
        res.send({ image: images[j] })

    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: "Internal server error!!" })
    }
}




module.exports = { getImage, addImage, updateImage, deleteImage, getSuperHero, getAllImages, addHero };   