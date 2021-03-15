const express =require('express')
const app=express()
const mongoose=require('mongoose')
const url="mongodb+srv://HealthApp:namanjain@cluster0.0m3m0.mongodb.net/HealthApp";
console.log("url",process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})

const connection=mongoose.connection

connection.once('open',()=>{
    console.log('Established')
})
