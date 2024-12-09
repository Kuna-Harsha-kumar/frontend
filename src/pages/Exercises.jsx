import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:8080/exercisedetails');
        
        const exerciseData = response.data['Exercises:'];
        if (Array.isArray(exerciseData)) {
          setExercises(exerciseData);
        } else {
          throw new Error('Invalid response structure');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exercise data. Please try again later.');
        setLoading(false);
      }
    };

    fetchExercises();
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
      <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  const groupedExercises = exercises.reduce((acc, exercise) => {
    const { category } = exercise;
    if (!acc[category]) acc[category] = [];
    acc[category].push(exercise);
    return acc;
  }, {});

  const handleButton1Click = () => {
    navigate('/search-by-category');
  };

  const handleButton2Click = () => {
    navigate('/search-by-exercise');
  };

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" sx={{ marginRight: 2 }} onClick={handleButton1Click}>
          Category Name
        </Button>
        <Button variant="outlined" onClick={handleButton2Click}>
          Exercise Name
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Exercise List
      </Typography>

      {Object.keys(groupedExercises).length === 0 ? (
        <Typography variant="body1" sx={{ fontSize: '1rem', color: '#555' }}>
          No exercises found.
        </Typography>
      ) : (
        Object.entries(groupedExercises).map(([category, exercisesInCategory]) => (
          <Accordion key={category}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.2rem' }}>
                {category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {exercisesInCategory.map((exercise) => (
                <Box
                  key={exercise.id}
                  mb={2}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '1.2rem', color: '#333' }}>
                    {exercise.exerciseName}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#555', mt: 1 }}>
                    <strong>Duration:</strong> {exercise.duration} minutes
                  </Typography>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default ExerciseList;
