const mongoose = require('mongoose')

//connection
 mongoose.connect('mongodb+srv://rahulvmrdk:rahul@cluster0.tkapjnb.mongodb.net/movieManagement?retryWrites=true&w=majority')
 .then(()=>{
    console.log('Db connected')
 })
 .catch((err)=>console.log(err))

 //schema

 const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    mname:String,
    mdate:Date,
    mactor:String,
    mcamera:String,
    mactress:String,
    mproducer:String,
    mdirector:String,
    mlang:String
});

//exporing
const MovieModel = mongoose.model('Movies',MovieSchema);
module.exports = MovieModel;