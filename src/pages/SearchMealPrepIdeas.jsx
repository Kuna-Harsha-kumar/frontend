import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, TextField, Button } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';

const MealPrepIdeas = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMeals = async (query = '') => {
    setLoading(true);
    setError('');

    try {
      const url = query
        ? `/mealByType?mealType=${query}`
        : '/mealByType';

      const response = await axiosInstance.get(url);
      setMeals(response.data['Meal Details'] || []); // Ensure meals is always an array
      setLoading(false);
    } catch (err) {
      setError('No meal found');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleSearch = () => {
    fetchMeals(searchQuery);
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
        Meal Prep Ideas
      </Typography>

      <Box sx={{ display: 'flex', mb: 4 }}>
        <TextField
          label="Search Meal Type"
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

      {meals.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray' }}>
          No meals found for "{searchQuery}".
        </Typography>
      ) : (
        meals.map((meal) => (
          <Box
            mb={4}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
            key={meal.mealName}
          >
            <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
              {meal.mealName} ({meal.mealType})
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
              This meal contains:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Calories:</strong> {meal.calories} kcal
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Protein:</strong> {meal.protein} g
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Carbohydrates:</strong> {meal.carbohydrates} g
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Fats:</strong> {meal.fats} g
            </Typography>

            <Divider sx={{ my: 3 }} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default MealPrepIdeas;
