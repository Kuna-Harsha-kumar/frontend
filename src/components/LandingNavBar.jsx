import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
      sx={{
        borderBottom: '1px solid #ddd',
        backgroundColor: '#ffffff',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/dashboard"
          sx={{
            textDecoration: 'none',
            color: '#1976d2',
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          FitFusion
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '1.5rem' }}>
          {[
           { label: 'Meal Planning Tips', to: '/meal-planning-tips' },
           { label: 'Exercises', to: '/exercises' },
           { label: 'Trainers', to: '/trainer-list' },
           { label: 'Free Recipe Collection', to: '/free-recipe-collection' },
           { label: 'Meal Prep Ideas', to: '/meal-prep-ideas' }, 
           { label: 'Nutrition Values', to: '/nutritional-values' }, 
          ].map((link) => (
            <Button
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => handleLinkClick(link.to)}
              sx={{
                fontWeight: activeLink === link.to ? 'bold' : 500,
                textTransform: 'none',
                color: activeLink === link.to ? '#1976d2' : '#555',
                borderBottom: activeLink === link.to ? '2px solid #1976d2' : 'none',
                transition: 'color 0.3s, border-bottom 0.3s',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Authentication Buttons */}
        <Box>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
            sx={{
              textTransform: 'none',
              boxShadow: '0px 4px 10px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
