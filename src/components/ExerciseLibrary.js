import React from 'react';
import { Box, Typography, TextField, MenuItem, List, ListItem, ListItemText } from '@mui/material';

const ExerciseLibrary = () => {
  const equipmentOptions = ['All', 'Veg', 'Non-Veg', 'Vegan'];
  const muscleOptions = ['All Muscles', 'Biceps', 'Chest', 'Back', 'Legs'];

  return (
    <Box className="exercise-library">
      <Typography variant="h6" gutterBottom>
        Library
      </Typography>
      <Box mb={1}>
        <TextField select fullWidth variant="outlined" label="Meal Types">
          {equipmentOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/* <Box mb={1}>
        <TextField select fullWidth variant="outlined" label="Muscles">
          {muscleOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box> */}
      <List>
        {['Meal 1', 'Meal 2', 'Meal 3', 'Meal 4', 'Meal 5', 'Meal 6'].map((exercise) => (
          <ListItem button key={exercise}>
            <ListItemText primary={exercise} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExerciseLibrary;