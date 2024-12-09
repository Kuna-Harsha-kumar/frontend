import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FreeRecipeCollection = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const handleChange = (recipeName) => {
    setCurrentRecipe(currentRecipe === recipeName ? null : recipeName);
  };

  const categories = [
    {
        title: "Non-Veg Recipes",
        recipes: [
          {
            name: "Grilled Chicken Salad",
            description: "A healthy mix of grilled chicken, greens, and vinaigrette.",
            fullRecipe: `**Ingredients:**\n- 1 chicken breast\n- 4 cups mixed greens\n- 1/2 cup cherry tomatoes\n- 1/4 cup cucumber\n- 1/4 cup red onion\n- 2 tbsp olive oil\n- 1 tbsp balsamic vinegar\n- Salt and pepper to taste\n\n**Instructions:**\n1. Preheat grill to medium-high heat.\n2. Season the chicken breast with salt and pepper, and grill for 6-7 minutes on each side until cooked through.\n3. Let the chicken rest for a few minutes, then slice it.\n4. In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, and red onion.\n5. In a small bowl, whisk together olive oil and balsamic vinegar. Pour over the salad and toss to combine.\n6. Top the salad with sliced grilled chicken and serve.`,
          },
          {
            name: "Beef Stir Fry",
            description: "Quick stir fry with tender beef and vegetables.",
            fullRecipe: `**Ingredients:**\n- 1 lb beef sirloin, sliced thinly\n- 2 cups broccoli florets\n- 1 bell pepper, sliced\n- 1 carrot, julienned\n- 2 cloves garlic, minced\n- 2 tbsp soy sauce\n- 1 tbsp oyster sauce\n- 1 tbsp cornstarch\n- 2 tbsp vegetable oil\n\n**Instructions:**\n1. In a bowl, combine beef, soy sauce, and cornstarch. Let it marinate for 15 minutes.\n2. Heat oil in a pan over high heat. Add marinated beef and stir-fry for 3-4 minutes until browned.\n3. Add garlic and vegetables; stir-fry for another 3-4 minutes until vegetables are tender-crisp.\n4. Add oyster sauce and mix well. Cook for an additional 2 minutes.\n5. Serve hot over steamed rice.`,
          },
          {
            name: "Pork Chops with Apples",
            description: "Juicy pork chops served with caramelized apples.",
            fullRecipe: `**Ingredients:**\n- 4 pork chops\n- 2 apples, sliced\n- 1 onion, sliced\n- 1/2 cup apple cider\n- 2 tbsp olive oil\n- Salt and pepper to taste\n\n**Instructions:**\n1. Heat olive oil in a skillet over medium heat. Season pork chops with salt and pepper.\n2. Cook pork chops for 5-6 minutes on each side until cooked through. Remove from skillet and set aside.\n3. In the same skillet, add onions and apples, and sauté for 5 minutes until softened.\n4. Pour in apple cider and bring to a simmer, scraping the bottom of the pan.\n5. Return pork chops to the skillet and simmer for another 3-4 minutes.\n6. Serve pork chops topped with caramelized apples and onions.`,
          },
          {
            name: "Shrimp Tacos",
            description: "Spicy shrimp tacos with fresh salsa.",
            fullRecipe: `**Ingredients:**\n- 1 lb shrimp, peeled and deveined\n- 1 tsp chili powder\n- 1 tsp cumin\n- 1 tbsp olive oil\n- 8 small corn tortillas\n- 1 cup diced tomatoes\n- 1/4 cup chopped cilantro\n- 1 lime, juiced\n\n**Instructions:**\n1. In a bowl, combine shrimp, chili powder, cumin, and olive oil. Toss to coat.\n2. Heat a skillet over medium-high heat. Add shrimp and cook for 3-4 minutes until pink and cooked through.\n3. In a separate bowl, mix diced tomatoes, cilantro, and lime juice to make salsa.\n4. Warm tortillas in a dry skillet. Fill each tortilla with shrimp and top with salsa.\n5. Serve immediately with lime wedges.`,
          },
          {
            name: "Chicken Curry",
            description: "Rich and flavorful chicken curry.",
            fullRecipe: `**Ingredients:**\n- 1 lb chicken, cut into pieces\n- 1 onion, chopped\n- 2 cloves garlic, minced\n- 1-inch piece ginger, minced\n- 2 tomatoes, pureed\n- 1 can coconut milk\n- 2 tbsp curry powder\n- 2 tbsp oil\n- Salt to taste\n\n**Instructions:**\n1. Heat oil in a pot over medium heat. Add onion, garlic, and ginger, sauté until golden.\n2. Add chicken pieces and cook until browned on all sides.\n3. Stir in curry powder and tomato puree, cooking for another 2-3 minutes.\n4. Pour in coconut milk, bring to a simmer, and cook for 20-25 minutes until chicken is cooked through.\n5. Season with salt and serve hot with rice or naan.`,
          },
        ],
      },
      {
        title: "Veg Recipes",
        recipes: [
          {
            name: "Vegetable Stir Fry",
            description: "A quick and colorful vegetable stir fry.",
            fullRecipe: `**Ingredients:**\n- 2 cups mixed vegetables (broccoli, bell peppers, carrots)\n- 2 cloves garlic, minced\n- 2 tbsp soy sauce\n- 1 tbsp olive oil\n- 1 tsp sesame seeds\n\n**Instructions:**\n1. Heat olive oil in a large pan over medium-high heat. Add garlic and sauté for 30 seconds.\n2. Add mixed vegetables and stir-fry for 5-7 minutes until tender.\n3. Pour in soy sauce and toss to coat. Cook for another 2 minutes.\n4. Garnish with sesame seeds and serve immediately.`,
          },
          {
            name: "Pasta Primavera",
            description: "Pasta with fresh seasonal vegetables.",
            fullRecipe: `**Ingredients:**\n- 8 oz pasta (penne or fusilli)\n- 2 cups mixed vegetables (zucchini, bell peppers, cherry tomatoes)\n- 3 tbsp olive oil\n- 2 cloves garlic, minced\n- Salt and pepper to taste\n- Grated Parmesan cheese (optional)\n\n**Instructions:**\n1. Cook pasta according to package instructions. Drain and set aside.\n2. In a pan, heat olive oil over medium heat. Add garlic and sauté for 1 minute.\n3. Add mixed vegetables and cook until tender, about 5-6 minutes.\n4. Toss cooked pasta with vegetables, season with salt and pepper. Serve with grated Parmesan if desired.`,
          },
          {
            name: "Stuffed Bell Peppers",
            description: "Bell peppers stuffed with rice and beans.",
            fullRecipe: `**Ingredients:**\n- 4 bell peppers\n- 1 cup cooked rice\n- 1 can black beans, rinsed and drained\n- 1 cup corn\n- 1 tsp cumin\n- Salt and pepper to taste\n\n**Instructions:**\n1. Preheat oven to 375°F (190°C).\n2. Cut the tops off the bell peppers and remove seeds. Place upright in a baking dish.\n3. In a bowl, mix rice, black beans, corn, cumin, salt, and pepper.\n4. Stuff each bell pepper with the rice mixture.\n5. Cover with foil and bake for 30 minutes. Remove foil and bake for another 10 minutes.`,
          },
          {
            name: "Chickpea Salad",
            description: "Refreshing salad with chickpeas and veggies.",
            fullRecipe: `**Ingredients:**\n- 1 can chickpeas, rinsed and drained\n- 1 cucumber, diced\n- 1 cup cherry tomatoes, halved\n- 1/4 cup red onion, chopped\n- 2 tbsp olive oil\n- 1 tbsp lemon juice\n- Salt and pepper to taste\n\n**Instructions:**\n1. In a large bowl, combine chickpeas, cucumber, tomatoes, and onion.\n2. Drizzle with olive oil and lemon juice, and season with salt and pepper.\n3. Toss to combine and serve chilled or at room temperature.`,
          },
          {
            name: "Vegetable Soup",
            description: "Warm and hearty vegetable soup.",
            fullRecipe: `**Ingredients:**\n- 1 onion, chopped\n- 2 carrots, diced\n- 2 celery stalks, diced\n- 2 cups vegetable broth\n- 1 can diced tomatoes\n- 2 cups mixed vegetables (peas, green beans, corn)\n- Salt and pepper to taste\n\n**Instructions:**\n1. In a large pot, sauté onion, carrots, and celery until softened.\n2. Add vegetable broth and diced tomatoes; bring to a boil.\n3. Add mixed vegetables, reduce heat, and simmer for 20 minutes.\n4. Season with salt and pepper before serving.`,
          },
        ],
      },
      {
        title: "Vegan Recipes",
        recipes: [
          {
            name: "Vegan Buddha Bowl",
            description: "A nourishing bowl filled with grains, greens, and veggies.",
            fullRecipe: `**Ingredients:**\n- 1 cup quinoa, cooked\n- 2 cups spinach\n- 1 carrot, grated\n- 1/2 cucumber, sliced\n- 1/4 cup hummus\n- 1 tbsp olive oil\n- Salt and pepper to taste\n\n**Instructions:**\n1. In a bowl, layer cooked quinoa, spinach, grated carrot, and sliced cucumber.\n2. Top with hummus and drizzle with olive oil.\n3. Season with salt and pepper, and enjoy.`,
          },
          {
            name: "Chickpea Curry",
            description: "A hearty chickpea curry cooked with spices.",
            fullRecipe: `**Ingredients:**\n- 1 can chickpeas, rinsed and drained\n- 1 onion, chopped\n- 2 cloves garlic, minced\n- 1 inch ginger, minced\n- 1 can coconut milk\n- 2 tbsp curry powder\n- 1 tbsp olive oil\n- Salt to taste\n\n**Instructions:**\n1. In a pot, heat olive oil over medium heat. Add onion, garlic, and ginger; sauté until softened.\n2. Stir in curry powder and cook for another minute.\n3. Add chickpeas and coconut milk, and bring to a simmer. Cook for 20 minutes.\n4. Season with salt and serve with rice or naan.`,
          },
          {
            name: "Vegan Tacos",
            description: "Tacos filled with spiced lentils and avocado.",
            fullRecipe: `**Ingredients:**\n- 1 cup lentils, cooked\n- 1 tsp cumin\n- 1 avocado, sliced\n- 8 small corn tortillas\n- 1/2 cup salsa\n- 1/4 cup cilantro, chopped\n\n**Instructions:**\n1. In a pan, heat lentils with cumin and cook for 5 minutes.\n2. Warm tortillas in a skillet.\n3. Fill each tortilla with lentils, top with avocado slices, salsa, and cilantro.\n4. Serve immediately.`,
          },
          {
            name: "Quinoa Salad",
            description: "A refreshing salad with quinoa, veggies, and dressing.",
            fullRecipe: `**Ingredients:**\n- 1 cup quinoa, cooked\n- 1 bell pepper, diced\n- 1 cup corn\n- 1/4 cup red onion, chopped\n- 2 tbsp olive oil\n- 1 tbsp lime juice\n- Salt and pepper to taste\n\n**Instructions:**\n1. In a large bowl, combine cooked quinoa, bell pepper, corn, and red onion.\n2. Drizzle with olive oil and lime juice, season with salt and pepper.\n3. Toss to combine and serve chilled.`,
          },
          {
            name: "Vegan Banana Bread",
            description: "Moist banana bread made without eggs or dairy.",
            fullRecipe: `**Ingredients:**\n- 3 ripe bananas, mashed\n- 1/4 cup coconut oil, melted\n- 1/2 cup brown sugar\n- 1 tsp vanilla extract\n- 1 cup flour\n- 1 tsp baking soda\n- 1/2 tsp salt\n\n**Instructions:**\n1. Preheat oven to 350°F (175°C).\n2. In a bowl, mix mashed bananas, coconut oil, brown sugar, and vanilla.\n3. In another bowl, combine flour, baking soda, and salt.\n4. Mix dry ingredients into wet ingredients until just combined.\n5. Pour batter into a greased loaf pan and bake for 50-60 minutes. Let cool before slicing.`,
          },
        ],
    },
  ];

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Free Recipe Collection
      </Typography>

      {categories.map((category, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {category.title}
          </Typography>

          {category.recipes.map((recipe, i) => (
            <Accordion 
              key={i} 
              expanded={currentRecipe === recipe.name} 
              onChange={() => handleChange(recipe.name)} 
              sx={{
                marginBottom: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: '500', fontSize: '1.2rem', color: '#333' }}>
                  {recipe.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body2" sx={{ color: '#666', marginBottom: '10px' }}>
                    {recipe.description} {/* Move description above the recipe */}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {recipe.fullRecipe}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}

          {index < categories.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default FreeRecipeCollection;