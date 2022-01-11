const Hero = require('../models/Heros')
const HeroImage = require('../models/superHeroImages');
const connectDb = require('../config/connectDb')

let something = async()=>{
    connectDb()
    let addHero = new Hero({
        SuperHeros :["ironman","thor","hulk","captainamerica"]
    })
    await addHero.save()
    let addHeroImage= new HeroImage({
        image :{
            ironman : "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg",
            thor : "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
            hulk : "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F07%2FHulk.jpg",
            captainamerica:"https://images.indianexpress.com/2020/04/captain-america-avengers-endgame-759.jpg",
            nothing : "https://i.stack.imgur.com/6M513.png"
        }
    })
    await addHeroImage.save()
}
something()