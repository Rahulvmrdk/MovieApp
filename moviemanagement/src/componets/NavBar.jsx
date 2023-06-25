import { Box, IconButton, Toolbar,Typography,Button,AppBar, CssBaseline, createTheme, ThemeProvider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

const NavBar = () => {
    const darkTheme = createTheme({
        palette: {
          
          primary: {
            light: '#757ce8',
            main: '#009688',
            dark: '#002884',
            contrastText: '#fff',
          },
        },
      });
  return (


    // <div className='main-div' style={{backgroundColor:'#00695f',height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'center'}}>
        <Box sx={{display:'flex',backgroundColor:'#00695f'}} >
            <CssBaseline/>
            <ThemeProvider theme={darkTheme}>
            <AppBar component={'nav'} color='primary' >
                <Toolbar>
                    
                    <img src={logo} alt="Logo" style={{height:'50px',width:'50px'}} /> &nbsp;&nbsp;
                    <Typography
                    variant="h4"
                    component="div"
                    >
                        MOVIE Flix

                    </Typography>
                    
                    {/* <Button variant='contained'>add</Button> */}
                    <Box sx={{marginLeft:'auto'}}>
                    
                        <IconButton>
                            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                                <HomeIcon/>
                            </Link>
                            
                        </IconButton>&nbsp;&nbsp;
                        
                        
                        <Button variant='contained' startIcon={<AddIcon/>} sx={{borderRadius:'12px'}}>
                            
                            <Link to={'/add'} style={{textDecoration:'none',color:'white'}}> Movie &nbsp;
                            
                            </Link>
                            {/* <AddIcon/>&nbsp;Movie */}
                            
                            
                        </Button>&nbsp;&nbsp;
                        <Button variant='contained' sx={{borderRadius:'12px'}}>
                            <Link to={'/about'} style={{textDecoration:'none',color:'white'}}>About us</Link>
                        </Button>

                    </Box>
                </Toolbar>

            </AppBar>
            </ThemeProvider>
            

        </Box>
    // </div>
  )
}

export default NavBar