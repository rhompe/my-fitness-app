import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      <h2>Lista de Ejercicios</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <Link to={`/exercise/${exercise.name}`}>{exercise.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
