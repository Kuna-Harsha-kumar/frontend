import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const articleDetails = {
  1: {
    title: '5 Best Workouts for Building Muscle',
    content: `
      Building muscle requires consistency, dedication, and the right exercises.
      Here are the top five workouts:
      
      1. Bench Press - Great for chest and triceps.
      2. Deadlift - Works your back and legs.
      3. Squats - Strengthens your legs and core.
      4. Pull-Ups - Focuses on your upper body and back.
      5. Overhead Press - Enhances shoulder and triceps strength.

      Incorporate these exercises into your routine for optimal results.
    `,
    image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg',
  },
  2: {
    title: '10 Tips for Staying Motivated to Exercise',
    content: `
      Staying motivated can be tough, but these tips will help you stay on track:
      
      1. Set realistic goals.
      2. Reward yourself for milestones.
      3. Mix up your workouts to avoid monotony.
      4. Find a workout buddy.
      5. Track your progress.
      6. Invest in good workout gear.
      7. Stay positive and visualize success.
      8. Follow a consistent schedule.
      9. Join fitness communities.
      10. Celebrate small wins.

      Keep these tips in mind to stay committed to your fitness journey.
    `,
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
  },
  3: {
    title: 'Yoga for Beginners: A Complete Guide',
    content: `
      Yoga can transform your mind and body. Here’s how beginners can start:
      
      - Choose a quiet space.
      - Use a yoga mat for comfort.
      - Start with basic poses like Downward Dog and Child’s Pose.
      - Focus on your breathing.
      - Be patient and consistent.

      Yoga is a journey, and every small step counts.
    `,
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg',
  },
};

const DetailedArticle = () => {
  const { id } = useParams();
  const article = articleDetails[id];

  if (!article) {
    return (
      <Box sx={{ py: 8, px: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Article Not Found
        </Typography>
        <Button component={Link} to="/articles" variant="contained" color="primary">
          Back to Articles
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, px: 4, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'primary.main' }}>
        {article.title}
      </Typography>
      <Box
        component="img"
        src={article.image}
        alt={article.title}
        sx={{ width: '100%', borderRadius: 2, mb: 4, boxShadow: 3 }}
      />
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 4, color: 'text.secondary' }}>
        {article.content}
      </Typography>
      <Button component={Link} to="/articles" variant="contained" color="primary">
        Back to Articles
      </Button>
    </Box>
  );
};

export default DetailedArticle;