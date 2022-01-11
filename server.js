const express = require('express')
const connectDb = require('./config/connectDb')
const cors = require('cors')

const app = express();

connectDb()
app.use(cors())

app.use(express.json({ extended: false }))

app.use("/add",require("./route/superHero"))
app.use("/get",require("./route/superHero"))


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server is listning on port ${PORT}`))