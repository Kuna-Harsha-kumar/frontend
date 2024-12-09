import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Avatar,
} from '@mui/material';

const trainersData = [
  {
    id: 1,
    name: 'John Doe',
    specialization: 'Strength Training',
    description:
      'John is a certified strength trainer with over 10 years of experience helping athletes build muscle and improve performance.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    details: 'John specializes in strength training and muscle building. He has worked with top athletes to enhance their endurance and performance. His personal training sessions are tailored to meet individual needs.',
  },
  {
    id: 2,
    name: 'Sophia Smith',
    specialization: 'Yoga & Flexibility',
    description:
      'Sophia is a yoga expert who blends traditional and modern techniques to improve flexibility and mental wellness.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    details: 'Sophia incorporates mindfulness and flexibility techniques to help her clients achieve both physical and mental well-being. She has trained under world-renowned yoga instructors.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    specialization: 'Cardio & Weight Loss',
    description:
      'Michael focuses on high-intensity cardio workouts to help clients achieve their weight loss and fitness goals.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    details: 'Michael’s sessions are energetic and result-oriented. He combines cardio, circuit training, and dietary advice to help clients shed weight effectively.',
  },
];

const TrainersPage = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: 'primary.main',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
        }}
      >
        Meet Our Trainers
      </Typography>

      <Grid container spacing={4}>
        {trainersData.map((trainer) => (
          <Grid item xs={12} md={4} key={trainer.id}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={trainer.image}
                alt={trainer.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {trainer.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                  {trainer.specialization}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {trainer.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleTrainerClick(trainer)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Trainer Details */}
      {selectedTrainer && (
        <Modal
          open={Boolean(selectedTrainer)}
          onClose={handleCloseModal}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '80%',
              maxWidth: '600px',
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Avatar
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto',
                  mb: 2,
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {selectedTrainer.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                {selectedTrainer.specialization}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {selectedTrainer.details}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCloseModal}
              sx={{ display: 'block', margin: '0 auto', textTransform: 'none' }}
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default TrainersPage;
