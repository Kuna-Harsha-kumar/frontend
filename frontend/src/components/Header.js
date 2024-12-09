import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0} className="header">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
          FitFusion
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;