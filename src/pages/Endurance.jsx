// src/components/Endurance.jsx
import React from 'react';

const Endurance = () => {
  const exercises = [
    {
      name: 'Carrera de Larga Distancia',
      description: 'Ideal para mejorar la capacidad cardiovascular y la resistencia general.',
      duration: '30-60 minutos',
      intensity: 'Moderada',
      rest: '5 minutos entre sesiones',
    },
    {
      name: 'Entrenamiento en Circuito',
      description: 'Alterna entre diferentes ejercicios para mantener el ritmo cardíaco elevado.',
      duration: '20-30 minutos',
      intensity: 'Alta',
      rest: '30-60 segundos entre estaciones',
    },
    {
      name: 'Ciclismo',
      description: 'Ejercicio perfecto para mejorar la resistencia de las piernas y el sistema cardiovascular.',
      duration: '45-90 minutos',
      intensity: 'Moderada',
      rest: '5-10 minutos entre series',
    },
    {
      name: 'Remo',
      description: 'Trabaja tanto la parte superior como la inferior del cuerpo, excelente para resistencia.',
      duration: '20-40 minutos',
      intensity: 'Moderada-Alta',
      rest: '2 minutos entre series',
    },
    {
      name: 'Salto de Cuerda',
      description: 'Un excelente ejercicio de resistencia que mejora la coordinación y el ritmo.',
      duration: '10-20 minutos',
      intensity: 'Alta',
      rest: '1-2 minutos entre series',
    },
  ];

  return (
    <div className="container">
      <h2>Mejorar la Resistencia</h2>
      <p>
        La resistencia es clave para mantener un rendimiento prolongado en actividades físicas. Aquí te presentamos algunos ejercicios que te ayudarán a mejorar tu capacidad cardiovascular y resistencia muscular:
      </p>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="card">
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p><strong>Duración:</strong> {exercise.duration}</p>
            <p><strong>Intensidad:</strong> {exercise.intensity}</p>
            <p><strong>Descanso:</strong> {exercise.rest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Endurance;
