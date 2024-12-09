import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        {[
          { text: 'Meal Planning Tips', path: '/meal-planning-tips' },
          { text: 'Free Recipe Collection', path: '/free-recipe-collection' },
          { text: 'Meal Prep Ideas', path: '/meal-prep-ideas' },
          { text: 'Nutritional Values', path: '/nutritional-values' },
        ].map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text} 
            sx={{
              border: '1px solid #ccc', // Subtle border
              borderRadius: '12px',      // Rounded corners
              margin: '5px 0',          // Margin between items
              padding: '10px 15px',     // Padding inside the item
              textDecoration: 'none',    // Prevents underline on hover
              color: 'inherit',          // Inherit color from parent
              '&:hover': {
                backgroundColor: 'transparent', // Prevent background change on hover
              },
              '&.active': {
                color: 'inherit', // Prevent color change on active state
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        component={Link} 
        to="/pro-membership-benefits" // Link to the new page
      >
        Unlock Custom Meals
      </Button>
    </div>
  );
};

export default Sidebar;