import React from 'react';
import { Typography, Box } from '@mui/material';

const MainContent = () => {
  return (
    <Box className="main-content">
      <Typography variant="h4" gutterBottom>
        All about Meals
      </Typography>
      <Box className="exercise-placeholder">
        <Typography variant="body1" color="textSecondary">
          Select your preferred meal type
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">
          Click on an exercise to see statistics about it.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default MainContent;