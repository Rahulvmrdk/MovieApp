const MovieModel = require("../model/model")

//get
const getAllMovie = async(req,res)=>{
    var data;
    try{
        data = await MovieModel.find()
        res.json(data)
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
    if(!data){
          res.status(404).json({status:'empty'})
    }
     
    
}

//put
const addMovie =  async(req,res)=>{
    let data;
    try{
        data = await MovieModel(req.body);
        data.save();
    }
    catch(error){
        console.log(error);
    }
    if(!data){
        res.status(500).json({status:'unable to add'})
    }
    res.json({status:'Data added'})
    
}

//update
const updateMovie = async(req,res)=>{
    let id = req.params.id;
    let data;
    try{
         data = await MovieModel.findByIdAndUpdate(id,req.body);
        res.json({status:'updated'})
    }
    catch(err){
        console.log(error);
        
    }
    if(!data){
        res.status(500).json({status:'unable to update'})
    }
}

//delete
const deleteMovie = async(req,res)=>{
    let id = req.params.id;
    try{
        await MovieModel.findByIdAndDelete(id);
        res.json({status:'deleted'})
    }
    catch(error){
        console.log(error)
        res.json({status:'unable to delete'})
    }
    
    
}

//exporting

module.exports = {getAllMovie,addMovie,updateMovie,deleteMovie}