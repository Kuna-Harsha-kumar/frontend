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

const contactData = [
  {
    id: 1,
    name: 'Matthew Perry',
    specialization: 'Admin Assistant',
    description:
      'Matthew handles all queries related to administrative processing. You can contact our office on weekdays between 9am and 5pm.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    details: 'Phone number: +1-xxx-xxx-xxxx or email us at queries@gmail.com.'
  },
  {
    id: 2,
    name: 'Tobey Maguire',
    specialization: 'Sales Head',
    description:
      'If you have any doubts about membership plans, please contact our sales head, Tobey.',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    details: 'Phone number : +1-xxx-xxx-xxxx or email : tobey@gmail.com',
  }
];

const Contact = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
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
        Got a query? Contact us!
      </Typography>

      <Grid container spacing={4}>
        {contactData.map((person) => (
          <Grid item xs={12} md={4} key={person.id}>
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
                image={person.image}
                alt={person.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {person.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                  {person.specialization}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {person.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePersonClick(person)}
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

      {/* Modal for person Details */}
      {selectedPerson && (
        <Modal
          open={Boolean(selectedPerson)}
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
                src={selectedPerson.image}
                alt={selectedPerson.name}
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto',
                  mb: 2,
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                {selectedPerson.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 2 }}>
                {selectedPerson.specialization}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {selectedPerson.details}
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

export default Contact;