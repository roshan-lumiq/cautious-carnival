const express = require('express')
const connectDb = require('./config/connectDb')
const cors = require('cors')

const app = express();

connectDb()
app.use(cors())

app.use(express.json({ extended: false }))

app.use('/addsuper1', require('./route/image'))
app.use('/getImage', require('./route/image'))
app.use('/add', require('./route/image'))
app.use('/update', require('./route/image'))
app.use('/delete', require('./route/image'))
app.use('/get', require('./route/image'))
app.use('/getall', require('./route/image'))
// app.use('/rsos', require('./route/image'))


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server is listning on port ${PORT}`))