import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/addUsers', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response);

      if (response.data['User added '] === 'Successfully')  {
        navigate('/login');
      }
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1c1e4f, #26286f)',
      }}
    >
      <Grid container sx={{ height: '100%', width: '100%' }}>
        {/* Left Section - Signup Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            backgroundColor: '#ffffff',
          }}
        >
          <Box sx={{ maxWidth: 400, width: '100%' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                color: '#1c1e4f',
              }}
            >
              Create Your Account
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: 'center', mb: 4, color: '#6c757d' }}
            >
              Sign up to start your fitness journey with FitFusion.
            </Typography>
            <Divider sx={{ mb: 4 }} />

            <Box component="form" noValidate onSubmit={handleSignup}>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              {error && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'center',
                    mt: 1,
                  }}
                >
                  {error}
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  backgroundColor: '#4e5ed2',
                  '&:hover': {
                    backgroundColor: '#404cb0',
                  },
                  textTransform: 'none',
                  borderRadius: 2,
                }}
                type="submit"
              >
                Sign Up
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{ mt: 4, textAlign: 'center', color: '#6c757d' }}
            >
              Already have an account?{' '}
              <Typography
                component={Link}
                to="/login"
                sx={{
                  color: '#4e5ed2',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Log in
              </Typography>
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: 'center', color: '#6c757d', fontSize: '0.8rem' }}
            >
              By signing up, you agree to our{' '}
              <Typography
                component="span"
                sx={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: '#4e5ed2',
                }}
              >
                Terms & Privacy Policy
              </Typography>
              .
            </Typography>
          </Box>
        </Grid>

        {/* Right Section - Background Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* This section serves as a decorative image background */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;