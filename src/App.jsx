import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AltNavbar from './components/LandingNavBar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Articles from './pages/Articles';
import DashBoardLanding from './pages/DashBoardLanding';
import AboutUs from './components/About';
import Exercises from './pages/Exercises';
import Trainers from './pages/Trainers';
import DetailedArticle from './pages/DetailedArticle';
import Contact from './components/Contact';
import FreeRecipeCollection from './pages/FreeRecipeCollection';
import MealPrepIdeas from './pages/MealPrepIdeas';
import MealPlanningTips from './pages/MealPlanningTips';
import SearchMealPrepIdeas from './pages/SearchMealPrepIdeas';
import SearchMealPrepByCalorie from './pages/SearchMealByCalories';
import SearchByCategory from './pages/SearchBycategory';
import SearchByExercise from './pages/SearchByExercise';
import TrainerList from './pages/TrainersList';
import NutritionalValues from './pages/NutritionalValues';

const App = () => {
  const location = useLocation();
  
  const altNavbarRoutes = [
    '/trainer-list',
    '/meal-planning-tips',
    '/free-recipe-collection',
    '/meal-prep-ideas',
    '/search-mealprep-ideas',
    '/search-mealprep-by-calorie',
    '/dashboard',
    '/exercises',
    '/search-by-category',
    '/search-by-exercise',
    '/nutritional-values',
    '/trainer-list'
  ];

  const showAltNavbar = altNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {showAltNavbar ? <AltNavbar /> : (location.pathname !== '/dashboard' && <Navbar />)}

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/index.html" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/search-by-category" element={<SearchByCategory />} />
        <Route path="/search-by-exercise" element={<SearchByExercise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<DetailedArticle />} />
        <Route path="/trainer-list" element={<TrainerList />} />
        <Route path="/meal-planning-tips" element={<MealPlanningTips />} />
        <Route path="/free-recipe-collection" element={<FreeRecipeCollection />} />
        <Route path="/nutritional-values" element={<NutritionalValues />} />
        <Route path="/meal-prep-ideas" element={<MealPrepIdeas />} />
        <Route path="/search-mealprep-ideas" element={<SearchMealPrepIdeas />} />
        <Route path="/search-mealprep-by-calorie" element={<SearchMealPrepByCalorie />} />
        <Route path="/dashboard" element={<DashBoardLanding />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
