const Image = require('../models/Image')
// const {check,validationResult}= require("express-validator")


//GET image 
const getImage = async (req,res,next) =>{
    if(isNaN(req.params.number)){
        return res.status(400).json({msg:'Try a valid number!!'})
    }

    try{
    let number = req.params.number
    const image = await Image.findOne({number},{_id:0,__v:0,number:0})
    console.log(number);
    if(!image){
        return res.status(404).json({msg:"No image found !!"})
    }
    res.send(image)
    }catch(err){
        console.error(err);
        res.status(500).json({msg:"Server error!!"})
    }

}

//Add image

const addImage = async(req,res)=>{
    try {
        const {image,number} = req.body;
        //checking the number in db
        const num = Number(number)

        const numberCheck = await Image.findOne({number:num},{_id:0,__v:0,number:0})
        if(numberCheck){
            return res.status(400).json({msg:"Number is already used !!"})
        }
        const addImage = new Image({
            image,
            number:num
        })
        await addImage.save()
        res.status(200).json(addImage)

        
    } catch (err) {
        console.error(err);  
        res.status(500).json({msg:"Server error!!"})      
    }

}


//Update image url by number 

const updateImage = async(req,res)=>{
    try {
        const {image,number} = req.body;
        //checking the number in db
        const num = Number(number)

        const numberCheck = await Image.findOne({number:num},{_id:0,__v:0,number:0})
        if(!numberCheck){
            return res.status(400).json({msg:"Number doesn't exist !!"})
        }
       const data = await Image.findOneAndUpdate({number:num},{image})
       res.status(200).json({msg:"Updated successfully"})
    } catch (err) {
        console.error(err);  
        res.status(500).json({msg:"Server error!!"})      
    }

}

//delete image document by number 

const deleteImage = async(req,res)=>{
    try {
        const {number} = req.body;
        const num = Number(number)
        console.log(req.body);

       const data = await Image.findOneAndDelete({number:num})
       res.status(200).json({msg:"Deleted successfully"})
    } catch (err) {
        console.error(err);  
        res.status(500).json({msg:"Server error!!"})      
    }

}




module.exports = {getImage,addImage,updateImage,deleteImage};   