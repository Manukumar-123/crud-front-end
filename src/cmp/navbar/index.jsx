import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

 const Navbar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:"#ffff",color:'black'}}>
        <Stack direction="row" justifyContent={'space-between'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{color:'black'}} />
          </IconButton> 
          <Button variant='text' sx={{color:'black', fontWeight:'bold'}}>
            Employee card
          </Button>       
        </Toolbar>
        <Toolbar>
            <Stack direction="row" spacing={3}>
              <Button variant="contained" color="info">
                <NavLink to="all" style={{textDecoration:'none',color:'white'}}>
                  show User
                </NavLink>
              </Button>
              <Button variant="contained" color="warning">
                <NavLink to="/" style={{textDecoration:'none',color:'white'}}>
                  Add User
                </NavLink>
              </Button>
            </Stack>
        </Toolbar>
        </Stack>
      </AppBar>
    </Box>
  );
}
export default Navbar;