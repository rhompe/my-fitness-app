import React, { useState } from 'react'; // Asegúrate de tener esta línea
import '../App.css';

const MuscleGroups = () => {
  const [selectedGroup, setSelectedGroup] = useState(''); // Estado correctamente inicializado

const exercises = {
  pecho: [
    {
      name: 'Press de Banca',
      description: 'Ejercicio compuesto que trabaja principalmente el pecho, además de los tríceps y los hombros.',
      sets: '3-5 series',
      reps: '4-6 repeticiones para fuerza, 8-12 para hipertrofia',
      rest: '90-120 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Press%20de%20Banca.png'
    },
    {
      name: 'Press Inclinado con Barra',
      description: 'Enfocado en la parte superior del pecho, este ejercicio se realiza en un banco inclinado con barra.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Press%20Inclinado%20con%20Barra.png'
    },
    {
      name: 'Aperturas con Mancuernas',
      description: 'Ejercicio de aislamiento que trabaja el pecho al abrir los brazos con mancuernas desde una posición acostada.',
      sets: '3-4 series',
      reps: '10-15 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Aperturas%20con%20Mancuernas.png'
    },
    {
      name: 'Fondos en Paralelas',
      description: 'Trabaja tanto el pecho como los tríceps dependiendo del ángulo y la inclinación del cuerpo.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Fondos%20en%20Paralelas.png'
    }
  ],
  espalda: [
    {
      name: 'Dominadas',
      description: 'Ejercicio básico para trabajar la espalda superior. Se realiza colgándose de una barra y elevando el cuerpo.',
      sets: '4 series',
      reps: '10-12 repeticiones',
      rest: '90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/dominadas.jpg'
    },
    {
      name: 'Peso Muerto',
      description: 'Ejercicio clave para fortalecer la espalda baja, los glúteos y los músculos posteriores de las piernas.',
      sets: '3-5 series',
      reps: '4-6 repeticiones para fuerza, 8-12 para hipertrofia',
      rest: '120 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Peso%20Muerto.png'
    },
    {
      name: 'Remo con Barra',
      description: 'Trabaja la espalda alta y media levantando una barra desde la posición de flexión de cadera.',
      sets: '4 series',
      reps: '8-10 repeticiones',
      rest: '90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Remo%20con%20Barra.png'
    },
    {
      name: 'Jalón al Pecho',
      description: 'Trabaja principalmente la espalda alta tirando de una barra hacia el pecho en una máquina de polea.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Jal%C3%B3n%20al%20Pecho.png'
    },
    {
      name: 'Remo con Mancuernas',
      description: 'Ejercicio unilateral que trabaja los músculos dorsales y los romboides.',
      sets: '3-4 series',
      reps: '10-12 repeticiones por lado',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Remo%20con%20Mancuernas.png'
    }
  ],
  hombros: [
    {
      name: 'Press Militar con Mancuernas',
      description: 'Un clásico para desarrollar los hombros. Se realiza sentado empujando dos mancuernas hacia arriba.',
      sets: '4 series',
      reps: '8-10 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Press%20Militar%20con%20Mancuernas.png'
    },
    {
      name: 'Elevaciones Laterales',
      description: 'Ejercicio excelente para desarrollar el deltoides lateral, levantando mancuernas hacia los lados.',
      sets: '4 series',
      reps: '12-15 repeticiones',
      rest: '45-60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Elevaciones%20Laterales.png'
    },
    {
      name: 'Elevaciones Frontales',
      description: 'Ejercicio de aislamiento para los deltoides frontales, se realiza levantando mancuernas o barra hacia el frente.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Elevaciones%20Frontales.png'
    },
    {
      name: 'Encogimientos de Hombros',
      description: 'Este ejercicio se enfoca en los trapecios, levantando los hombros con mancuernas o barra.',
      sets: '4 series',
      reps: '10-15 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Encogimientos%20de%20Hombros.png'
    }
  ],
  piernas: [
    {
      name: 'Sentadillas',
      description: 'Ejercicio compuesto que trabaja principalmente los cuádriceps, glúteos y músculos isquiotibiales.',
      sets: '3-5 series',
      reps: '6-12 repeticiones',
      rest: '90-120 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Sentadillas.png'
    },
    {
      name: 'Prensa de Piernas',
      description: 'Ejercicio en máquina que te permite levantar pesos mayores de manera segura, trabajando los cuádriceps y glúteos.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Prensa%20de%20Piernas.png'
    },
    {
      name: 'Zancadas',
      description: 'Ejercicio funcional para trabajar los cuádriceps, glúteos e isquiotibiales. Se realiza dando pasos hacia adelante con pesas o mancuernas.',
      sets: '3-4 series',
      reps: '10-12 repeticiones por pierna',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Zancadas.png'
    },
    {
      name: 'Peso Muerto Rumano',
      description: 'Se enfoca en los isquiotibiales y glúteos, realizando el movimiento de peso muerto con las piernas rectas.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Peso%20Muerto%20Rumano.png'
    }
  ],
  biceps: [
    {
      name: 'Curl con Barra',
      description: 'Ejercicio clásico para trabajar los bíceps, levantando una barra con las palmas hacia arriba.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Curl%20con%20Barra.png'
    },
    {
      name: 'Curl Martillo',
      description: 'Variante que trabaja más el braquial y el antebrazo, con las palmas enfrentadas.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Curl%20Martillo.png'
    },
    {
      name: 'Curl Concentrado',
      description: 'Ejercicio que se enfoca en la cabeza larga del bíceps, realizado sentado con una mancuerna por brazo.',
      sets: '3 series',
      reps: '12-15 repeticiones',
      rest: '45-60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Curl%20Concentrado.png'
    },
    {
      name: 'Curl en Predicador',
      description: 'Realizado en un banco inclinado, este ejercicio aísla los bíceps y ayuda a un estiramiento más completo.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Curl%20en%20Predicador.png'
    }
  ],
  triceps: [
    {
      name: 'Fondos en Paralelas',
      description: 'Ejercicio que trabaja principalmente los tríceps bajando y subiendo el cuerpo sobre barras paralelas.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Fondos%20en%20Paralelas.png'
    },
    {
      name: 'Press de Tríceps en Polea Alta',
      description: 'Ejercicio que trabaja los tríceps en máquina, modificando el trabajo según el agarre utilizado.',
      sets: '3-4 series',
      reps: '10-12 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Press%20de%20Tr%C3%ADceps%20en%20Polea%20Alta.webp'
    },
    {
      name: 'Extensión de Tríceps con Mancuerna',
      description: 'Ejercicio que trabaja el tríceps llevando una mancuerna detrás de la cabeza y extendiendo los brazos.',
      sets: '3-4 series',
      reps: '8-10 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Extensi%C3%B3n%20de%20Tr%C3%ADceps%20con%20Mancuerna.jpg'
    },
    {
      name: 'Patada de Tríceps',
      description: 'Ejercicio de aislamiento realizado con una mancuerna, extendiendo el brazo hacia atrás desde una posición inclinada.',
      sets: '3 series',
      reps: '12-15 repeticiones',
      rest: '45-60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Patada%20de%20Tr%C3%ADceps.png'
    }
  ],
    abdominales: [
    {
      name: 'Plancha',
      description: 'Ejercicio isométrico que trabaja todo el core, manteniendo una posición rígida.',
      sets: '3-4 series',
      duration: '30-60 segundos',
      rest: '45 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Plancha.webp'
    }
  ],
  gluteos: [
    {
      name: 'Hip Thrust',
      description: 'Ejercicio para fortalecer los glúteos, se realiza elevando las caderas desde el suelo mientras apoyas la espalda en un banco.',
      sets: '3-4 series',
      reps: '8-12 repeticiones',
      rest: '60-90 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Hip%20Thrust.webp'
    },
    {
      name: 'Puente de Glúteo',
      description: 'Un ejercicio básico para glúteos, levantando la cadera desde el suelo.',
      sets: '3 series',
      reps: '12-15 repeticiones',
      rest: '60 segundos entre series',
      image: 'https://raw.githubusercontent.com/rhompe/imagnes/refs/heads/main/gym/Puente%20de%20Gl%C3%BAteo.png'
    }
  ]
};
  // Función para manejar la selección del grupo muscular
  const handleSelectChange = (e) => {
    setSelectedGroup(e.target.value); // Cambia el estado
  };

  return (
    <div className="container">
      <h2>Ejercicios por Grupo Muscular</h2>
      <p>Aquí encontrarás una lista de ejercicios para distintos grupos musculares.</p>

      {/* Dropdown para seleccionar el grupo muscular */}
      <select value={selectedGroup} onChange={handleSelectChange}>
        <option value="">Selecciona un grupo muscular</option>
        {Object.keys(exercises).map((group) => (
          <option key={group} value={group}>
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </option>
        ))}
      </select>

      {/* Mostrar ejercicios solo si hay un grupo seleccionado */}
      {selectedGroup && (
        <div className="muscle-group">
          <h3>{selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1)}</h3>
          <ul className="exercise-list">
            {exercises[selectedGroup].map((exercise, idx) => (
              <li key={idx} className="card">
                <h4>{exercise.name}</h4>
                <p>{exercise.description}</p>
                <p>
                  <strong>Series:</strong> {exercise.sets}
                </p>
                <p>
                  <strong>Repeticiones:</strong> {exercise.reps || exercise.duration}
                </p>
                <p>
                  <strong>Descanso:</strong> {exercise.rest}
                </p>
                <img src={exercise.image} alt={exercise.name} className="exercise-img" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MuscleGroups;
