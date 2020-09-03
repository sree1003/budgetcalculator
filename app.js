const express= require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/db1'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection


con.on('open',() => {
    console.log('connected....')
})

const userRouter = require('./routers/user1')
app.use('/user1',userRouter)


app.listen(9000,() => {
    console.log('server started')
})


