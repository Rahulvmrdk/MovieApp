//import express
const express = require('express');
const MovieModel = require('./model/model');
const cors = require('cors')

//ini

const app = new express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const controlRouter = require('./routes/movieRouter')
app.use('/movie',controlRouter)
//api creation
// //view api
// app.get('/view',async(req,res)=>{
//     var data = await MovieModel.find();
//     res.json(data);
//     console.log('viewing..')

// })

// //Add api
// app.post('/add',async(req,res)=>{
//     console.log(req.body);
//     var data = await MovieModel(req.body);
//     data.save();
//     res.json({status:'data saved'})
    
// })

// //delete api
// app.delete('/deletemovie/:id',async(req,res)=>{
//     let id = req.params.id;
    
//     await MovieModel.findByIdAndDelete(id);
//     res.json({status:'deleted'})
// })


// //update api
// app.put('/edit/:id',async(req,res)=>{
//     let id = req.params.id;
//     try{
//         var data = await MovieModel.findByIdAndUpdate(id,req.body);
//         res.json({status:'updated'})
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })


// port
 app.listen('3001',()=>{
    console.log('port 3001 is activated');
 })
