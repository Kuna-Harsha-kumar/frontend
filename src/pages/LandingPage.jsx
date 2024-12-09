import React from 'react';
import { Grid, Box, Typography, Button, Container, Card, CardContent, Avatar, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Log Workouts
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            Get Stronger
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Stay Motivated
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            FitFusion is your free web-based workout tracker. Build routines, track progress, and stay connected with friends.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/signup">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
            alt="Workout App"
            sx={{ maxWidth: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: 'linear-gradient(to right, #e3f2fd, #ffffff)', borderRadius: 2, mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.dark' }}>
          Features Designed for Your Fitness Journey
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              title: 'Track Workouts',
              description: 'Easily log your exercises, sets, and reps to keep track of your progress.',
              icon: '🏋️',
            },
            {
              title: 'Build Routines',
              description: 'Customize workout plans tailored to your fitness goals.',
              icon: '📋',
            },
            {
              title: 'Stay Connected',
              description: 'Engage with a community of fitness enthusiasts.',
              icon: '🤝',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {feature.icon}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, color: 'primary.dark' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.100', borderRadius: 2, mb: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, color: 'primary.dark' }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              name: 'Alex Johnson',
              feedback: 'FitFusion has completely changed the way I work out. I can track everything seamlessly!',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
            {
              name: 'Sophia Lee',
              feedback: 'The routines feature is amazing. I’ve hit all my fitness goals using this app!',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              name: 'Michael Brown',
              feedback: 'I love how easy it is to connect with other fitness enthusiasts!',
              avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Avatar src={testimonial.avatar} sx={{ width: 64, height: 64, margin: '0 auto', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.dark' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  {testimonial.feedback}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(to right, #42a5f5, #64b5f6)',
          borderRadius: 2,
          color: 'white',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Ready to Transform Your Fitness Journey?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join thousands of users who trust FitFusion for their fitness goals. It’s free, easy, and effective.
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          component={Link}
          to="/signup"
          sx={{
            mx: 2,
            backgroundColor: 'white',
            color: 'primary.main',
            '&:hover': { backgroundColor: '#e3f2fd' },
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          component={Link}
          to="/about-us"
          sx={{
            mx: 2,
            borderColor: 'white',
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
