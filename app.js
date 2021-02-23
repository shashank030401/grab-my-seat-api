require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@cluster0.eyjhl.mongodb.net/projectDB`, { useUnifiedTopology: true, useNewUrlParser: true });

const eventSchema = new mongoose.Schema({
    username:String,
    organizerName: String,
    eventName: String,
    description: String,
    location: String,
    tolalCapacity: Number,
    startDate: Number,
    startTime: String,
    endDate: Number,
    endTime: String,
    price:Number,
    city:String,
    image: 
    {
        data: Buffer,
        contentType: String
    },
    Booked:Number,
    BookedPer:Number,
    eventType:String

});
const Event = mongoose.model("Event", eventSchema);

const collegeEventSchema = new mongoose.Schema({
    username: String,
    name: String,
    description: String,
    location: String,
    startDate: Number,
    startTime: String,
    endDate: Number,
    endTime: String,
    price:Number,
    collegeName: String,
    type: String,
    image: 
    {
        data: Buffer,
        contentType: String
    },
    Booked:Number,
    rules: String
});

const CollegeEvent = mongoose.model("CollegeEvent", collegeEventSchema);

app.get("/events",(req,res)=>{
    Event.find({},(err,foundEvents)=>{
        if(err){
            console.log(err);
        }else{
            res.json(foundEvents)
        }
    })
});
app.get("/collegeEvents",(req,res)=>{
    CollegeEvent.find({},(err,foundEvents)=>{
        if(err){
            console.log(err);
        }else{
            res.json(foundEvents)
        }
    })
});

app.listen(3000,()=>{
    console.log("server running on 3000");
})