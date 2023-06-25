import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {
    const [inp,setInp] = useState(props.data);
    const navigate = useNavigate()
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInp((prev)=>({...prev,[name]:value}))
        console.log(inp);

    }
    const movieAdd = () =>{
        if(props.method == 'post'){
            axios.post('http://localhost:3001/movie',inp)
            .then(()=>{
                alert('Movie Added')
                navigate('/')
            })
            .catch((err)=>{console.log(err)})
            setInp({mname:'',mdate:'',mactor:'',mcamera:'',mactress:'',mproducer:'',mdirector:'',mlang:''})
        }
        if(props.method == 'put'){
         axios.put('http://localhost:3001/movie/'+inp._id,inp)  
         .then(()=>{
            alert("Updated")
            window.location.reload(false)
         }) 
        }
    }
  return (
    
    <Container maxWidth  sx={{bgcolor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh',width:'75%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px' }}>
            {/* <TextField variant='standard' placeholder='Movie Name'/> */}
            <br />
            <Grid container spacing={2} rowSpacing={1}>
                <Grid xs={6} md={6}>
                    <TextField
                    required id='standard-required' name='mname' value={inp.mname} onChange={inputHandler} variant='standard' label='Movie Name'  placeholder='Movie Name' />

                </Grid>
                <Grid xs={6} md={6}>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker name='madate' label='Released Date' slotProps={{ textField: { variant: 'standard' } }} />

                    </LocalizationProvider> */}
                    {/* <Typography variant='h6'>Release Date</Typography> */}
                    <TextField 
                    variant='standard' name='mdate' value={inp.mdate} onChange={inputHandler} placeholder='' label='Released Date' type='date' 
                     margin="normal" sx={{width:'200px'}} InputLabelProps={{shrink: true,}}
                    />
                    

                </Grid>
                <Grid xs={6} md={6}>
                <TextField 
                required id='standard-required' name='mactor' value={inp.mactor} onChange={inputHandler} variant='standard' label='Actor' placeholder='Actor'/>

                </Grid>
                <Grid xs={6} md={6}>
                <TextField 
                required id='standard-required' name='mcamera' value={inp.mcamera} onChange={inputHandler} label='Camera' variant='standard' placeholder='Camera'/>

                </Grid>
                <Grid xs={6} md={6}>
                <TextField
                required id='standard-required' name='mactress' value={inp.mactress} onChange={inputHandler} label='Actress' variant='standard' placeholder='Actress'/>

                </Grid>
                <Grid xs={6} md={6}>
                <TextField
                required id='standard-required' name='mproducer' value={inp.mproducer} onChange={inputHandler} label='Producer' variant='standard' placeholder='Producer'/>

                </Grid>
                <Grid xs={6} md={6}>
                <TextField
                required id='standard-required' name='mdirector' value={inp.mdirector} onChange={inputHandler} label='Director' variant='standard' placeholder='Director'/>

                </Grid>
                <Grid xs={6} md={6}>
                <TextField
                required id='standard-required' name='mlang' value={inp.mlang} onChange={inputHandler} label='Language' variant='standard' placeholder='Language'/>

                </Grid><br /><br />
                <Grid xs={12} md={12}>
                <Button variant='elevated' onClick={movieAdd} sx={{borderRadius:'12px'}}>
                    Add
                </Button>

                </Grid>

            </Grid>
        </Box>
            
        </Container>
  )
}

export default AddMovie