import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, TextField, Button } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';

const CategoryExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchExercises = async (category = '') => {
    setLoading(true);
    setError('');

    try {
      const url = category
        ? `/exercise?exercise=${category}`
        : '/categoryExercises'; // Adjust URL based on category

      const response = await axiosInstance.get(url);

      const exercisesData = response.data['Exercises:'];

      if (Array.isArray(exercisesData)) {
        setExercises(exercisesData);
      } else if (exercisesData) {
        setExercises([exercisesData]);
      } else {
        setExercises([]);
      }
      
      setLoading(false);
    } catch (err) {
      setError('No exercises found');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleSearch = () => {
    fetchExercises(searchQuery);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Exercises
      </Typography>

      <Box sx={{ display: 'flex', mb: 4 }}>
        <TextField
          label="Search Exercise"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ marginRight: '8px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ padding: '12px 24px', fontWeight: '600' }}
        >
          Search
        </Button>
      </Box>

      {exercises.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray' }}>
          No exercises found for "{searchQuery}".
        </Typography>
      ) : (
        exercises.map((exercise) => (
          <Box
            mb={4}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
            key={exercise.id}
          >
            <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
              {exercise.exerciseName} ({exercise.category})
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
              This exercise has the following duration:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Duration:</strong> {exercise.duration} minutes
            </Typography>

            <Divider sx={{ my: 3 }} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default CategoryExercises;
