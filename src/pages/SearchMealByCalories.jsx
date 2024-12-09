import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, TextField, Button } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';

const MealPrepIdeas = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mealType, setMealType] = useState('');
  const [calories, setCalories] = useState('');

  const fetchMeals = async (mealType = '', calories = '') => {
    setLoading(true);
    setError('');

    try {
      const url = mealType && calories
        ? `/mealByCalories?mealType=${mealType}&calories=${calories}`
        : '/mealByType';

      const response = await axiosInstance.get(url);
      setMeals(response.data['Meal Details'] || []); // Ensure meals is always an array
      setLoading(false);
    } catch (err) {
      setError('Meal Not found in particular Requirements');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleSearch = () => {
    fetchMeals(mealType, calories);
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
      <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
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

      {/* Search Form */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', mb: 4 }}>
        <TextField
          label="Meal Type"
          variant="outlined"
          fullWidth
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          sx={{ flex: '1 1 300px' }}
        />
        <TextField
          label="Calories"
          variant="outlined"
          fullWidth
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          sx={{ flex: '1 1 300px' }}
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

      {/* Meal List */}
      {meals.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray' }}>
          No meals found for the specified criteria.
        </Typography>
      ) : (
        meals.map((meal) => (
          <Box
            key={meal.mealName}
            mb={4}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)' },
            }}
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
