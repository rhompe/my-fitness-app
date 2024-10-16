import React from 'react';
import { useParams } from 'react-router-dom';

const ExerciseDetail = ({ exercises }) => {
  const { name } = useParams();
  const exercise = exercises.find(ex => ex.name === name);

  return (
    <div>
      <h2>{exercise.name}</h2>
      <p>{exercise.description}</p>
      <p><strong>Repeticiones:</strong> {exercise.reps}</p>
      <p><strong>Músculos Trabajados:</strong> {exercise.muscles}</p>
    </div>
  );
};

export default ExerciseDetail;
