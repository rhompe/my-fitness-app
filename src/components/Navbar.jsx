// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: '#ffff' }}>
          Fitness App
        </Link>
      </h1>

      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/mass-gain">Ganar Masa Muscular</Link>
        </li>
        <li>
          <Link to="/weight-loss">Perder Peso</Link>
        </li>
        <li>
          <Link to="/endurance">Mejorar la Resistencia</Link>
        </li>
        <li>
          <Link to="/toning">Tonificación y Definición</Link>
        </li>
        <li>
          <Link to="/workout-plan">Plan de Entrenamiento</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
