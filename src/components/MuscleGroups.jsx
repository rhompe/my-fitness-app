// src/components/MuscleGroups.jsx
import React from 'react';

const MuscleGroups = () => {
  const exercises = {
    espalda: [
      {
        name: 'Dominadas',
        description: 'Ejercicio básico para fortalecer la espalda y el core. Se realiza colgándose de una barra y elevando el cuerpo.',
        sets: '4 series',
        reps: '10-12 repeticiones',
        rest: '90 segundos entre series',
        image: '/images/dominadas.jpg' // Añade la ruta de la imagen
      },
      {
        name: 'Remo con Barra',
        description: 'Trabaja la espalda alta y media levantando una barra desde la posición de flexión de cadera.',
        sets: '4 series',
        reps: '8-10 repeticiones',
        rest: '90 segundos entre series',
        image: '/images/remo-barra.jpg'
      }
    ],
    biceps: [
      {
        name: 'Curl con Barra',
        description: 'Ejercicio esencial para el desarrollo de los bíceps, levantando una barra con las palmas hacia arriba.',
        sets: '3 series',
        reps: '12-15 repeticiones',
        rest: '60 segundos entre series',
        image: '/images/curl-barra.jpg'
      },
      {
        name: 'Curl Martillo con Mancuernas',
        description: 'Variante del curl que trabaja más el braquial y el antebrazo, con las palmas de las manos enfrentadas.',
        sets: '3 series',
        reps: '12-15 repeticiones',
        rest: '60 segundos entre series',
        image: '/images/curl-martillo.jpg'
      }
    ],
    triceps: [
      {
        name: 'Press Francés',
        description: 'Se realiza acostado en un banco, extendiendo y flexionando los codos para trabajar los tríceps.',
        sets: '4 series',
        reps: '10-12 repeticiones',
        rest: '60 segundos entre series',
        image: '/images/press-frances.jpg'
      },
      {
        name: 'Fondos',
        description: 'Trabaja principalmente los tríceps bajando y subiendo el cuerpo sobre barras paralelas.',
        sets: '3 series',
        reps: '10-12 repeticiones',
        rest: '60 segundos entre series',
        image: '/images/fondos.jpg'
      }
    ],
    abdomen: [
      {
        name: 'Crunch Abdominal',
        description: 'Ejercicio básico para el abdomen superior. Se realiza acostado levantando los hombros hacia las rodillas.',
        sets: '3 series',
        reps: '15-20 repeticiones',
        rest: '30 segundos entre series',
        image: '/images/crunch.jpg'
      },
      {
        name: 'Plancha',
        description: 'Un excelente ejercicio isométrico que trabaja todo el core, manteniendo una posición rígida.',
        sets: '3 series',
        duration: '30-60 segundos',
        rest: '45 segundos entre series',
        image: '/images/plancha.jpg'
      }
    ],
    hombros: [
      {
        name: 'Press Militar con Mancuernas',
        description: 'Un clásico para desarrollar los hombros. Se realiza sentado empujando dos mancuernas hacia arriba.',
        sets: '4 series',
        reps: '8-10 repeticiones',
        rest: '60 segundos entre series',
        image: '/images/press-militar.jpg'
      },
      {
        name: 'Elevaciones Laterales',
        description: 'Ejercicio excelente para desarrollar el deltoides lateral, levantando mancuernas hacia los lados.',
        sets: '4 series',
        reps: '12-15 repeticiones',
        rest: '45 segundos entre series',
        image: '/images/elevaciones-laterales.jpg'
      }
    ]
  };

  return (
    <div className="container">
      <h2>Ejercicios por Grupo Muscular</h2>
      <p>
        Aquí encontrarás una lista de ejercicios para distintos grupos musculares. Cada uno tiene su descripción, sets, repeticiones y tiempos de descanso recomendados, junto con una imagen demostrativa.
      </p>

      {Object.keys(exercises).map((group, index) => (
        <div key={index} className="muscle-group">
          <h3>{group.charAt(0).toUpperCase() + group.slice(1)}</h3>
          <ul className="exercise-list">
            {exercises[group].map((exercise, idx) => (
              <li key={idx} className="card">
                <h4>{exercise.name}</h4>
                <p>{exercise.description}</p>
                <p><strong>Series:</strong> {exercise.sets}</p>
                <p><strong>Repeticiones:</strong> {exercise.reps || exercise.duration}</p>
                <p><strong>Descanso:</strong> {exercise.rest}</p>
                <img src={exercise.image} alt={exercise.name} className="exercise-img" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MuscleGroups;
