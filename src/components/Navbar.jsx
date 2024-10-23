import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de tener los estilos en un archivo CSS.

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          <Link to="/" style={{ textDecoration: 'none', color: '#ffff' }}>
            Fitness App
          </Link>
        </h1>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span> {/* Icono de hamburguesa */}
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
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
