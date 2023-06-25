const express = require('express');
const MovieModel = require('../model/model');
const { getAllMovie, addMovie, updateMovie, deleteMovie } = require('../controller/movieController');
const router = express.Router();


router.get('/',getAllMovie);
router.post('/',addMovie);
router.put('/:id',updateMovie);
router.delete('/:id',deleteMovie)
// //view api
// router.get('/',async(req,res)=>{
//     var data = await MovieModel.find();
    

//     res.json(data);
//     console.log('viewing..')

// })

// //Add api
// router.post('/',async(req,res)=>{
//     console.log(req.body);
//     var data = await MovieModel(req.body);
//     data.save();
//     res.json({status:'data saved'})
    
// })

// //delete api
// router.delete('/:id',async(req,res)=>{
//     let id = req.params.id;
    
//     await MovieModel.findByIdAndDelete(id);
//     res.json({status:'deleted'})
// })


// //update api
// router.put('/:id',async(req,res)=>{
//     let id = req.params.id;
//     try{
//         var data = await MovieModel.findByIdAndUpdate(id,req.body);
//         res.json({status:'updated'})
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })

//exporting
module.exports = router;
