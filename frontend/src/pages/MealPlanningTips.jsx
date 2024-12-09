import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const MealPlanningTips = () => {
  const sections = [
    {
      title: "Gaining Muscle Mass",
      description: "Increase muscle size by providing your body with a surplus of calories and adequate protein to fuel muscle synthesis.",
      guidelines: [
        {
          subtitle: "Caloric Surplus",
          text: "Aim for a 10-20% caloric surplus over your maintenance calories to support muscle growth. Track your daily intake to ensure you're consistently eating enough."
        },
        {
          subtitle: "Protein Intake",
          text: "Consume around 1.6-2.2 grams of protein per kilogram of body weight daily. Protein sources such as chicken, fish, lean beef, eggs, and tofu are ideal for muscle building."
        },
        {
          subtitle: "Carbohydrate Intake",
          text: "Carbohydrates are essential for intense workouts. Aim for 4-6 grams per kilogram of body weight. Prioritize complex carbs like oats, rice, and whole grains for sustained energy."
        },
        {
          subtitle: "Meal Frequency",
          text: "Consider spreading protein intake across 4-6 meals throughout the day to maximize muscle protein synthesis. Try to include protein with each meal or snack."
        },
        {
          subtitle: "Healthy Fats",
          text: "Incorporate healthy fats like avocados, nuts, and olive oil for added calories without overeating. Aim for 20-30% of your total calories from fats."
        },
      ],
    },
    {
      title: "Losing Fat",
      description: "Reduce body fat while preserving muscle mass by maintaining a calorie deficit and consuming adequate protein.",
      guidelines: [
        {
          subtitle: "Caloric Deficit",
          text: "Aim for a 15-25% reduction in daily caloric intake from your maintenance calories. Avoid extremely low-calorie diets as they can lead to muscle loss and reduced metabolic rate."
        },
        {
          subtitle: "Protein Intake",
          text: "Increase protein intake to 2.2-2.6 grams per kilogram of body weight to preserve muscle mass. Include high-protein snacks like Greek yogurt, protein shakes, and lean meats."
        },
        {
          subtitle: "Carbohydrate Reduction",
          text: "Lower carbs moderately, focusing on complex carbs like sweet potatoes and quinoa for lasting energy. Avoid processed sugars and opt for fiber-rich foods."
        },
        {
          subtitle: "Meal Timing",
          text: "Consider intermittent fasting or time-restricted eating to control hunger and calorie intake, while also allowing for adequate protein consumption in each meal."
        },
        {
          subtitle: "Hydration",
          text: "Stay hydrated to help manage hunger and support fat loss. Aim for at least 3-4 liters of water per day."
        },
      ],
    },
    {
      title: "Body Recomposition",
      description: "Simultaneously build muscle and lose fat by careful meal planning to support both goals.",
      guidelines: [
        {
          subtitle: "Slight Caloric Deficit or Maintenance",
          text: "Eating at maintenance or a slight deficit (5-10%) can support muscle retention and fat loss. Track your calories to stay consistent and prevent overeating."
        },
        {
          subtitle: "Higher Protein Intake",
          text: "Consume 2.2-2.6 grams per kilogram of body weight to support muscle synthesis. Lean protein sources like chicken breast, turkey, fish, and egg whites are ideal."
        },
        {
          subtitle: "Carbohydrate Timing",
          text: "Focus on carbs around workout times for energy and recovery, keeping carbs moderate otherwise. Aim for nutrient-dense carbs like brown rice and whole grains."
        },
        {
          subtitle: "Healthy Fat Balance",
          text: "Keep fats moderate to allow room for carbs and protein. Sources like olive oil, flaxseed, and almonds provide necessary fatty acids without excess calories."
        },
        {
          subtitle: "Nutrient Density",
          text: "Focus on nutrient-dense foods to maximize vitamin and mineral intake. Prioritize leafy greens, berries, and lean proteins to support overall health."
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Meal Planning Tips
      </Typography>

      {sections.map((section, index) => (
        <Box
          key={index}
          mb={4}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
            {section.description}
          </Typography>

          {section.guidelines.map((item, i) => (
            <Box key={i} mb={1}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>
                {item.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666' }}>
                {item.text}
              </Typography>
            </Box>
          ))}
          
          {index < sections.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default MealPlanningTips;