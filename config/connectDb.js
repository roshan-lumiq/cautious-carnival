const mongoose = require('mongoose');

const url =  "mongodb://localhost:27017/newapp"

const connectDb = async()=>{
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true  ,
             useUnifiedTopology: true  ,
             useFindAndModify:false        
        })
        console.log("connected to mongo.....");
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

module.exports = connectDb;