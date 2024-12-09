
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

const Articles = () => {
  const articles = [
    { id: 1, title: '5 Best Workouts for Building Muscle', description: 'Discover the top 5 workouts to help you build muscle quickly and effectively.' },
    { id: 2, title: '10 Tips for Staying Motivated to Exercise', description: 'Stay on track with these 10 tips that will help you remain motivated during your fitness journey.' },
    { id: 3, title: 'Yoga for Beginners: A Complete Guide', description: 'Everything you need to know to start yoga as a beginner.' },
  ];

  return (
    <Box sx={{ padding: '3rem', backgroundColor: '#f9f9f9' }}>
      {/* Title Section */}
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem', color: 'primary.main'}}>
          Your Personal Library
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
          We write about a wide variety of fitness-related content, including workout guides, exercise instructions, and other fitness recommendations. All our content is written by and vetted by a team of personal coaches and experts.
        </Typography>
      </Box>

      {/* Article List */}
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '1rem' }}>
                  {article.description}
                </Typography>
                <Button component={Link} to={`/article/${article.id}`} variant="contained" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
