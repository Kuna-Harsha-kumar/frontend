import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getTrainerDetails');
        
        const trainerData = response.data['TrainerDetails:'];
        if (Array.isArray(trainerData)) {
          setTrainers(trainerData);
        } else {
          throw new Error('Invalid response structure');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch trainer data. Please try again later.');
        setLoading(false);
      }
    };

    fetchTrainers();
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

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Trainer List
      </Typography>

      {trainers.length === 0 ? (
        <Typography variant="body1" sx={{ fontSize: '1rem', color: '#555' }}>
          No trainers found.
        </Typography>
      ) : (
        trainers.map((trainer) => (
          <Accordion key={trainer.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.2rem' }}>
                {trainer.FirstName} {trainer.LastName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555', mt: 1 }}>
                  <strong>Qualifications:</strong> {trainer.Qualifications}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555', mt: 1 }}>
                  <strong>Bio:</strong> {trainer.Bio}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555', mt: 1 }}>
                  <strong>Availability:</strong> {trainer.Availability}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', color: '#555', mt: 1 }}>
                  <strong>Email:</strong> {trainer.Email}
                </Typography>
                <Divider sx={{ mt: 2 }} />
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default TrainerList;
