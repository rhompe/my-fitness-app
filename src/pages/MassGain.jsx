// src/components/MuscleGain.jsx
import React from 'react';

const MuscleGain = () => {
  const exercises = [
    {
      name: 'Press de Banca',
      description: 'Uno de los mejores ejercicios para trabajar el pecho, tríceps y hombros.',
      sets: '4',
      reps: '8-12',
      rest: '90 segundos entre series',
    },
    {
      name: 'Sentadillas',
      description: 'Ejercicio fundamental para fortalecer las piernas y el core.',
      sets: '4',
      reps: '6-10',
      rest: '2 minutos entre series',
    },
    {
      name: 'Peso Muerto',
      description: 'Este ejercicio compuesto trabaja la espalda baja, glúteos, y piernas.',
      sets: '4',
      reps: '5-8',
      rest: '2 minutos entre series',
    },
    {
      name: 'Dominadas',
      description: 'Ideal para desarrollar la espalda y los bíceps.',
      sets: '4',
      reps: '6-10',
      rest: '90 segundos entre series',
    },
    {
      name: 'Press Militar',
      description: 'Trabaja los hombros y los tríceps, excelente para ganar fuerza en la parte superior.',
      sets: '4',
      reps: '8-10',
      rest: '90 segundos entre series',
    },
  ];

  return (
    <div className="container">
      <h2>Ganar Masa Muscular</h2>
      <p>
        Para ganar masa muscular, es crucial enfocarse en ejercicios compuestos que involucren grandes grupos musculares y un peso adecuado. A continuación, te presentamos una rutina para maximizar el crecimiento muscular:
      </p>
      <ul className="exercise-list">
        {exercises.map((exercise, index) => (
          <li key={index} className="card">
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p><strong>Series:</strong> {exercise.sets}</p>
            <p><strong>Repeticiones:</strong> {exercise.reps}</p>
            <p><strong>Descanso:</strong> {exercise.rest}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MuscleGain;
