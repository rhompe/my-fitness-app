// src/components/WeightLoss.jsx
import React from 'react';

const WeightLoss = () => {
  const exercises = [
    {
      name: 'Burpees',
      description: 'Un ejercicio de cuerpo completo que quema muchas calorías y mejora el acondicionamiento cardiovascular.',
      sets: '4',
      reps: '12-15',
      rest: '45 segundos entre series',
    },
    {
      name: 'Mountain Climbers',
      description: 'Este ejercicio cardio combina fuerza y resistencia, excelente para perder grasa.',
      sets: '4',
      reps: '30 segundos',
      rest: '30 segundos entre series',
    },
    {
      name: 'Jumping Jacks',
      description: 'Un ejercicio aeróbico clásico que aumenta la frecuencia cardíaca rápidamente.',
      sets: '4',
      reps: '1 minuto',
      rest: '30 segundos entre series',
    },
    {
      name: 'Sprints en Intervalos',
      description: 'Alterna entre correr a alta velocidad y caminar para quemar calorías rápidamente.',
      sets: '6',
      reps: '30 segundos de sprint, 1 minuto de descanso caminando',
      rest: '1 minuto entre intervalos',
    },
    {
      name: 'Kettlebell Swings',
      description: 'Un ejercicio excelente para quemar grasa, trabajar el core y mejorar la resistencia cardiovascular.',
      sets: '4',
      reps: '15-20',
      rest: '1 minuto entre series',
    },
  ];

  return (
    <div className="container">
      <h2>Perder Peso</h2>
      <p>
        La pérdida de peso se basa en ejercicios cardiovasculares combinados con movimientos funcionales que involucran grandes grupos musculares. A continuación, te presentamos una rutina eficaz:
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

export default WeightLoss;
