import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import gpayLogo from '../assets/logos/gpay.png';
import visaLogo from '../assets/logos/visa.png';
import appleLogo from '../assets/logos/apple.png';
import amexLogo from '../assets/logos/amex.png';
import paypalLogo from '../assets/logos/paypal.png';

const ProMembershipBenefits = () => {
  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Pro Membership Benefits
      </Typography>
      
      <Box mb={4}>
        <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
          Only Custom Meals
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
          - Get tailored meal plans according to your dietary preferences.
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
          - Access to exclusive recipes that suit your nutritional goals.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
          Get
        </Button>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
          Custom Meals Plus Trainer
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
          - Personalized meal and fitness plans from certified trainers.
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
          - Regular consultations to ensure you stay on track.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
          Get
        </Button>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333', mt: 4 }}>
        Accepted Payment Methods
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item>
          <img src={gpayLogo} alt="Google Pay" style={{ width: '50px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src={visaLogo} alt="Visa" style={{ width: '50px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src={appleLogo} alt="MasterCard" style={{ width: '50px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src={amexLogo} alt="American Express" style={{ width: '50px', height: 'auto' }} />
        </Grid>
        <Grid item>
          <img src={paypalLogo} alt="PayPal" style={{ width: '50px', height: 'auto' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProMembershipBenefits;