import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MassGain from './pages/MassGain';
import WeightLoss from './pages/WeightLoss';
import Endurance from './pages/Endurance';
import Toning from './pages/Toning';
import ExerciseDetail from './components/ExerciseDetail';
import './App.css';
import MuscleGroups from './components/MuscleGroups'; 
import HomeWorkoutPlan from './pages/HomeWorkoutPlan';
import Generador from './pages/Tickets/Generador';
import Ticket from './pages/Tickets/Ticket';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MuscleGroups />} />
        <Route path="/mass-gain" element={<MassGain />} />
        <Route path="/weight-loss" element={<WeightLoss />} />
        <Route path="/endurance" element={<Endurance />} />
        <Route path="/toning" element={<Toning />} />
        <Route path="/exercise/:name" element={<ExerciseDetail />} />
        <Route path="/workout-plan" element={<HomeWorkoutPlan />} />
        <Route path="/tickets/generador" element={<Generador />} />
        <Route path="/tickets/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export default App;
