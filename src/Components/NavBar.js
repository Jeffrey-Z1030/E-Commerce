import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';


function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Link to='/'>Store</Link>
          </Typography>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><Link to='allProduct'>All Items</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link>Option 2</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link>Option 3</Link></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

