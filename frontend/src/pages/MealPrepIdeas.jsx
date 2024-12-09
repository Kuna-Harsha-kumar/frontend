import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MealPrepIdeas = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mealPlans');
        setMeals(response.data['Meal Details']);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch meal data. Please try again later.');
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

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
      {/* Navigation bar */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
          Meal Prep Ideas
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/search-mealprep-ideas')}
            sx={{ padding: '8px 16px', fontSize: '0.9rem' }}
          >
            Search Meals By Type
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/search-mealprep-by-calorie')}
            sx={{ padding: '8px 16px', fontSize: '0.9rem' }}
          >
            Search Meals By Calories
          </Button>
        </Box>
      </Box>

      {/* Meal list */}
      {meals.map((meal) => (
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
      ))}
    </Box>
  );
};

export default MealPrepIdeas;
