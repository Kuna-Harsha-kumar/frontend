import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Avatar,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const LoggedInLandingPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Welcome Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome Back  !!!!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
          Let’s crush those fitness goals today! Here's a quick overview of your progress and tools to keep you motivated.
        </Typography>
      </Box>

      {/* Quick Actions Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {[
          {
            title: 'WorkOut',
            description: 'Keep your squats low and your standards high ,You dont sweat, You sparkle You work out so You can drink beer The only BS you need in your life is burpees and squats',
            icon: '🏋️',
            link : 'https://www.google.com/search?q=importance+of+working+out&oq=importance+of+work&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyCQgBEEUYORiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM1NjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
          },
          {
            title: 'Diet',
            description: 'Its not a short term diet.Its a long term Lifestyle.Follow Your diet',
            icon: '📊',
            link :'https://www.google.com/search?q=importance+of+following+diet&sca_esv=024b198981d53257&sxsrf=ADLYWIKX_shOkV6BGjkThD6ZwZmFGYYvjQ%3A1733632918575&ei=liNVZ4nrIvPcptQPh6DXsAE&ved=0ahUKEwiJjqHyrZeKAxVzrokEHQfQFRYQ4dUDCA8&uact=5&oq=importance+of+following+diet&gs_lp=Egxnd3Mtd2l6LXNlcnAiHGltcG9ydGFuY2Ugb2YgZm9sbG93aW5nIGRpZXQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABiiBBiJBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYogQYiQVImBBQowJYiw9wAXgBkAEAmAFqoAHEA6oBAzMuMrgBA8gBAPgBAZgCBqAC1APCAgoQABiwAxjWBBhHwgILEAAYgAQYkQIYigXCAgUQABiABMICChAAGIAEGBQYhwLCAgsQABiABBiGAxiKBZgDAOIDBRIBMSBAiAYBkAYCkgcDNC4yoAe7Jg&sclient=gws-wiz-serp',
          },
          {
            title: 'Fitness Routine',
            description: 'The Secret of your future is hidden in your Fitness Routine.!!',
            link:'https://www.google.com/search?q=daily+fitness+routine+benifits&sca_esv=024b198981d53257&sxsrf=ADLYWIIUddDUFXQ87veUDj2Ymo5QQCLWow%3A1733632969682&ei=ySNVZ9yhKdzbptQP9-_mgQE&ved=0ahUKEwicqtCKrpeKAxXcrYkEHfe3ORAQ4dUDCA8&uact=5&oq=daily+fitness+routine+benifits&gs_lp=Egxnd3Mtd2l6LXNlcnAiHmRhaWx5IGZpdG5lc3Mgcm91dGluZSBiZW5pZml0czIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESNIyUKkLWKUxcAh4AZABAJgBZ6AB9wiqAQQxMS4yuAEDyAEA-AEBmAIVoAKlCcICChAAGLADGNYEGEfCAgcQABiABBgNwgIIEAAYCBgNGB7CAgsQABiABBiGAxiKBcICBBAhGAqYAwDiAwUSATEgQIgGAZAGCJIHBDE5LjKgB6NO&sclient=gws-wiz-serp',
            icon: '📝',
          },
        ].map((action, index) => (
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
                {action.icon}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {action.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {action.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={action.link}
              >
                {action.title}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Section */}
      <Box sx={{ mb: 8 }}>
  <Typography
    variant="h4"
    component="h2"
    gutterBottom
    sx={{ fontWeight: 700, textAlign: 'center' }}
  >
    Fitness Inspiration
  </Typography>
  <Grid container spacing={4}>
    {[
      {
        quote: 'Take care of your body. It’s the only place you have to live.',
        person: 'Jim Rohn',
      },
      {
        quote: 'The difference between the impossible and the possible lies in a person’s determination.',
        person: 'Tommy Lasorda',
      },
      {
        quote: 'Strength does not come from physical capacity. It comes from an indomitable will.',
        person: 'Mahatma Gandhi',
      },
    ].map((activity, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Card
          elevation={4}
          sx={{
            p: 3,
            textAlign: 'center',
            borderRadius: 2,
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 600, color: 'primary.dark' }}
          >
            {activity.quote}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            - {activity.person}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

      {/* Motivational Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(to right, #66bb6a, #81c784)',
          borderRadius: 2,
          color: 'white',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          “Push yourself, because no one else is going to do it for you.”
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Keep striving for greatness. Track your progress and stay consistent!
        </Typography>
      </Box>
    </Container>
  );
};

export default LoggedInLandingPage;
