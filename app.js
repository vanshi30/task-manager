const express = require('express')
const app = express()
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect')
// const mongoose = require('mongoose')
require('dotenv').config()


// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }).then(()=>console.log("db connected")).catch(err=>console.log(err))

app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)


const port = process.env.PORT || 5000

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{console.log(`listening on ${port}.....`)})
    }catch(err){
        console.log(err);
    }
}
start()
// app.listen(5000,()=>{console.log("listening at 5000 port....")})
