const express =require('express')
const app=express()
const mongoose=require('mongoose')
const Disease=require('./app/models/disease')
const Post=require('./app/models/post')
app.use(express.json())
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})

const connection=mongoose.connection

connection.once('open',()=>{
    console.log('Established')
})

require('./Routes/web')(app)

app.listen(3000,()=>{
    console.log('Node connected')
})


