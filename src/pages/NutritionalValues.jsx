import React, { useState } from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, Divider } from '@mui/material';

const NutritionalValues = () => {
  const [unit, setUnit] = useState('g');

  const categories = [
    {
      title: "Non-Veg",
      items: [
        { name: "Grilled Chicken Breast", carbs: 0, protein: 31, fat: 3.6 },
        { name: "Salmon", carbs: 0, protein: 25, fat: 13 },
        { name: "Eggs", carbs: 1, protein: 6, fat: 5 },
        { name: "Ground Beef (85% lean)", carbs: 0, protein: 26, fat: 20 },
        { name: "Turkey Breast", carbs: 0, protein: 29, fat: 1 },
        { name: "Pork Loin", carbs: 0, protein: 26, fat: 8 },
        { name: "Tuna (canned in water)", carbs: 0, protein: 25, fat: 1 },
        { name: "Shrimp", carbs: 0, protein: 24, fat: 0.3 },
        { name: "Lamb Chops", carbs: 0, protein: 25, fat: 18 },
        { name: "Chicken Thigh", carbs: 0, protein: 25, fat: 10 },
        { name: "Beef Steak", carbs: 0, protein: 30, fat: 24 },
        { name: "Bacon", carbs: 0, protein: 12, fat: 42 },
        { name: "Duck Breast", carbs: 0, protein: 22, fat: 16 },
        { name: "Halibut", carbs: 0, protein: 23, fat: 4 },
        { name: "Crab", carbs: 0, protein: 20, fat: 1 },
      ]
    },
    {
      title: "Veg",
      items: [
        { name: "Quinoa", carbs: 21, protein: 4, fat: 2 },
        { name: "Chickpeas", carbs: 27, protein: 15, fat: 4 },
        { name: "Tofu", carbs: 2, protein: 8, fat: 5 },
        { name: "Lentils", carbs: 20, protein: 9, fat: 0.4 },
        { name: "Sweet Potato", carbs: 20, protein: 2, fat: 0.1 },
        { name: "Brown Rice", carbs: 23, protein: 2.5, fat: 0.9 },
        { name: "Spinach", carbs: 1, protein: 3, fat: 0.4 },
        { name: "Broccoli", carbs: 7, protein: 2.5, fat: 0.4 },
        { name: "Cauliflower", carbs: 5, protein: 2, fat: 0.3 },
        { name: "Green Peas", carbs: 14, protein: 5, fat: 0.4 },
        { name: "Bell Peppers", carbs: 6, protein: 1, fat: 0.2 },
        { name: "Mushrooms", carbs: 4, protein: 3, fat: 0.3 },
        { name: "Zucchini", carbs: 3, protein: 1, fat: 0.4 },
        { name: "Carrots", carbs: 9, protein: 1, fat: 0.2 },
        { name: "Almonds", carbs: 22, protein: 21, fat: 50 },
      ]
    },
    {
      title: "Vegan",
      items: [
        { name: "Chia Seeds", carbs: 12, protein: 4, fat: 9 },
        { name: "Hemp Seeds", carbs: 11, protein: 10, fat: 13 },
        { name: "Avocado", carbs: 9, protein: 1, fat: 15 },
        { name: "Black Beans", carbs: 22, protein: 8, fat: 0.9 },
        { name: "Peanut Butter", carbs: 20, protein: 25, fat: 50 },
        { name: "Edamame", carbs: 8, protein: 9, fat: 4 },
        { name: "Coconut Milk", carbs: 6, protein: 1, fat: 5 },
        { name: "Oats", carbs: 27, protein: 6, fat: 3 },
        { name: "Nutritional Yeast", carbs: 5, protein: 8, fat: 1 },
        { name: "Lima Beans", carbs: 21, protein: 7, fat: 0.6 },
        { name: "Flaxseeds", carbs: 29, protein: 6, fat: 42 },
        { name: "Sweet Corn", carbs: 19, protein: 3, fat: 1 },
        { name: "Pumpkin Seeds", carbs: 13, protein: 30, fat: 14 },
        { name: "Potatoes", carbs: 17, protein: 2, fat: 0.2 },
        { name: "Couscous", carbs: 36, protein: 6, fat: 0.3 },
      ]
    },
  ];

  const convertToOunces = (grams) => {
    return (grams / 28.3495).toFixed(2);
  };

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.9rem', marginRight: '10px' }}>
          Nutritional Values    
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: '10px' }}>
          (Per 100g / 3.53oz)
        </Typography>
        <Select
  value={unit}
  onChange={(e) => setUnit(e.target.value)}
  sx={{
    marginBottom: '20px',
    borderRadius: '8px',
    '& .MuiSelect-select': {
      padding: '8px 12px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '8px',
    },
    '& .MuiMenuItem-root': {
      padding: '4px 12px',
    },
  }}
>
  <MenuItem value="g">Grams</MenuItem>
  <MenuItem value="oz">Ounces</MenuItem>
</Select>
      </Box>

      {categories.map((category, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {category.title}
          </Typography>

          <TableContainer>
            <Table sx={{ borderRadius: '8px', overflow: 'hidden' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Food Item</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Carbs</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Protein</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Fat</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.items.map((item, i) => {
                  const carbs = unit === 'g' ? item.carbs : convertToOunces(item.carbs);
                  const protein = unit === 'g' ? item.protein : convertToOunces(item.protein);
                  const fat = unit === 'g' ? item.fat : convertToOunces(item.fat);

                  return (
                    <TableRow key={i} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#e0f7fa' } }}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{carbs} {unit === 'g' ? 'g' : 'oz'}</TableCell>
                      <TableCell>{protein} {unit === 'g' ? 'g' : 'oz'}</TableCell>
                      <TableCell>{fat} {unit === 'g' ? 'g' : 'oz'}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider sx={{ margin: '20px 0' }} />
        </Box>
      ))}
    </Box>
  );
};

export default NutritionalValues;