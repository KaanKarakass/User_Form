import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
              Home
            </Link>
          </Typography>
          <Link to="/add/location" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              Add Location
            </Typography>
          </Link>
          <Link to="/show/location" style={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Show Locations
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
