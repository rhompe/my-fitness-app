// src/components/Toning.jsx
import React from 'react';

const Toning = () => {
  const exercises = [
    {
      name: 'Sentadillas con Peso Corporal',
      description: 'Fortalece y tonifica los músculos de las piernas y los glúteos.',
      sets: '4 series',
      reps: '15-20 repeticiones',
      rest: '60 segundos entre series',
    },
    {
      name: 'Flexiones',
      description: 'Ejercicio excelente para tonificar el pecho, hombros y brazos.',
      sets: '3 series',
      reps: '12-15 repeticiones',
      rest: '60 segundos entre series',
    },
    {
      name: 'Elevaciones Laterales con Mancuernas',
      description: 'Ideal para tonificar los hombros y darle definición.',
      sets: '3 series',
      reps: '12-15 repeticiones',
      rest: '45 segundos entre series',
    },
    {
      name: 'Plancha',
      description: 'Excelente para tonificar el core y mejorar la estabilidad del cuerpo.',
      sets: '3 series',
      duration: '30-60 segundos',
      rest: '60 segundos entre series',
    },
    {
      name: 'Zancadas con Peso Corporal',
      description: 'Ayuda a tonificar las piernas y los glúteos, mejorando el equilibrio.',
      sets: '3 series por pierna',
      reps: '12-15 repeticiones por pierna',
      rest: '45 segundos entre series',
    },
  ];

  return (
    <div className="container">
      <h2>Tonificación y Definición</h2>
      <p>
        Tonificar el cuerpo implica trabajar los músculos de forma controlada y con repeticiones altas para ganar definición. A continuación, algunos ejercicios que te ayudarán a tonificar y definir tu cuerpo:
      </p>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="card">
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p><strong>Series:</strong> {exercise.sets}</p>
            <p><strong>Repeticiones:</strong> {exercise.reps || exercise.duration}</p>
            <p><strong>Descanso:</strong> {exercise.rest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toning;
