import { TableBar } from '@mui/icons-material'
import { Button, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow,Container, Box, CircularProgress, Table, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddMovie from './AddMovie';


const HomePage = () => {
    const [movies,setMovies] = useState([])
    const [singleVal,setSingleVal] = useState([])
    const [update,setUpdate] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3001/movie')
        .then((res)=>{
            console.log(res.data)
            setMovies(res.data)

        })
        .catch((err)=>{console.log(err)})
        setLoading(false)
        
    },[])

    const deleteMovie = (id)=>{
        console.log(id)
        axios.delete('http://localhost:3001/movie/'+id)
        .then(()=>{
            alert('Deleted')
            window.location.reload(false)
        })
        .catch((err)=>{console.log(err)})
    }
    const updateMovie = (val)=>{
        console.log('clicked')
        setUpdate(true)
        setSingleVal(val)
    }
    var finaljsx = 
    // loading?<CircularProgress color='success'/>:
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh',width:'80%',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)',borderRadius:'15px' }}>
       {/* <TextField id="standard-basic" label="search"  variant="standard" /> */}
    {loading?<CircularProgress color='success'/>:<TableContainer sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 650 ,borderRadius:'15px',boxShadow:'5px 5px 25px -5px rgba(0,0,0,0.5)'}} aria-label="simple table">
            <TableHead>
                <TableRow >
                    <TableCell>Movie Name</TableCell>
                    <TableCell>Actor</TableCell>
                    <TableCell>Actress</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell>Released date </TableCell>
                    <TableCell>Camera</TableCell>
                    <TableCell>Producer</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
                {movies.map((val,index)=>{
                    return(
                        <TableRow sx={{border:'2px solid',borderColor:'#00695f'}}>
                        <TableCell>{val.mname}</TableCell>
                        <TableCell>{val.mactor}</TableCell>
                        <TableCell>{val.mactress}</TableCell>
                        <TableCell>{val.mdirector}</TableCell>
                        <TableCell>{val.mdate}</TableCell>
                        <TableCell>{val.mcamera}</TableCell>
                        <TableCell>{val.mproducer}</TableCell>
                        <TableCell>{val.mlang}</TableCell>
                        <TableCell>
                            <Button sx={{borderRadius:'12px'}}><EditIcon
                            onClick={()=>{
                                updateMovie(val)
                            }}
                            /></Button>
                            {/* <Button sx={{borderRadius:'12px'}}><EditIcon/></Button> */}
                            
                            
                            
                        </TableCell>
                        <TableCell>
                                <IconButton>
                                    <DeleteIcon color='error' onClick={()=>{deleteMovie(val._id)}}/>
                                </IconButton>
                            </TableCell>
                    </TableRow>
                    )
                })}
                    
                
            </TableBody>
            </Table>
        </TableContainer>}
    
    </Box>
    if (update) finaljsx = <AddMovie data = {singleVal} method = 'put' />
return (
    

<Container maxWidth  sx={{bgcolor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
  {/* {loading?<CircularProgress color='primary'/>:finaljsx} */}
  {finaljsx}  
    
    
    
</Container>

  )
}

export default HomePage