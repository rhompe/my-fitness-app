import React, { useState } from 'react';

const HomeWorkoutPlan = () => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Estado para la semana seleccionada
  const [selectedDay, setSelectedDay] = useState('Lunes'); // Estado para el día seleccionado

const workoutPlan = {
  1: {
    Lunes: [
      {
        name: 'Caminata Lateral',
        description: '30 reps de lado a lado - Camina de lado a lado casi abajo en Squat. Usa las bandas de resistencia para aumentar tensión en glúteos.',
        imagen: 'ruta-a-imagen/caminata-lateral.jpg'
      },
      {
        name: 'Squat',
        description: '15 reps, 3 segundos en pausa - Baja con la espalda recta, quédate 3 segundos abajo, y sube cargando el peso con tus talones. La mancuerna o peso extra lo puedes cargar de distintas maneras, con brazos abajo, arriba… elige como mejor te acomodes.',
        imagen: 'ruta-a-imagen/squat.jpg'
      },
      {
        name: 'Glute Bridge',
        description: '15 reps, 3 segundos en pausa - Acuéstate boca arriba, pon el peso arriba de tu cadera y levanta apretando glúteos y metiendo cadera. Mantén tu barbilla hacia tu pecho. Si agregas barra con peso, pon un tapete entre la barra y tu cadera para que no te moleste. Abre levemente piernas para agregar resistencia con las bandas.',
        imagen: 'ruta-a-imagen/glute-bridge.jpg'
      },
      {
        name: 'Kick Back',
        description: '15 reps cada pierna, primero 15 una pierna y luego 15 la otra - Ponte en cuatro y aplasta la banda con una rodilla para que no se mueva, levantando la otra pierna hacia atrás. También puedes poner la banda a la altura de tus cuádriceps, depende de la banda. No hagas la patada exactamente hacia atrás, abre ligeramente tu pierna/rodilla hacia afuera. ',
        imagen: 'ruta-a-imagen/plank.jpg'
      },
      {
        name: 'Romanian Deadlift + una solapierna',
        description: '10 reps + 5 reps una pierna + 5 la otra - Para las reps de una pierna, recarga tu pie trasero en la banca para mantener el equilibrio pero enfócate en hacer todo el esfuerzo con tu pierna del piso. No dobles mucho rodillas y levanta el peso con talones para enfocarte en glúteos. Llega lo más abajo posible sin encorvar espalda. Si tienes barra, hazlo con ella. ',
        imagen: 'ruta-a-imagen/press-hombro.jpg'
      },
      {
        name: 'Abducción de cadera sentada en piso',
        description: '50 reps- Ponte las bandas donde mayor resistencia sientas, puede ser alrededor de las rodillas. Enfócate en sentir los glúteos. ',
        imagen: 'ruta-a-imagen/burpees.jpg'
      }
    ],
    Martes: [
      {
        name: 'Plank',
        description: '1 minuto - Mantén tu cuerpo recto, sin subir ni bajar cadera. ',
        imagen: 'ruta-a-imagen/crunches.jpg'
      },
      {
        name: 'Press hombro',
        description: '15 reps - Recuerda que si no tienes mancuernas, puedes hacer las tuyas con dos botellas de agua llenas de arena o agua',
        imagen: 'ruta-a-imagen/lagartijas.jpg'
      },
      {
        name: 'Burpees',
        description: '10 reps - Los Burpees consisten en bajar en squat, mandar tus piernas para atrás, hacer una lagartija, regresar y saltar.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Abs: Crunches',
        description: '20 reps - Contrae tu abdomen y encórvalo, piensa en la contracción y haz cada repetición controlada poniendo dura la zona. Inhala cuando estás en el piso y exhala al levantarte, metiendo el ombligo. Agrega peso para mayor dificultad.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Lagartijas',
        description: '15 reps- Baja con tu cuerpo recto y tus brazos abiertos a 45º de tu cuerpo. Puedes bajar tus rodillas si no llegas a las repeticiones y continuar hastacompletarlas.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Sprinter Skip',
        description: '10 reps un lado y 10 reps el otro- Toca tu pie con tu mano contraria y levanta tu pierna trasera llevándola hacia adelante con un salto pequeño.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      }
    ],
    Miércoles: [
      {
        name: 'Lunge estático',
        description: '15 reps cada lado, primero 15 un lado y luego 15 el otro - Realiza los lunges estáticos, no subas por completo. Carga el peso con tu talón e inclina un poco tu torso hacia adelante para sentir más el movimiento en glúteos.',
        imagen: 'ruta-a-imagen/crunches.jpg'
      },
      {
        name: 'Abducción de cadera sentada en piso',
        description: '50 reps - Ponte las bandas donde mayor resistencia sientas, puede ser alrededor de las rodillas. Enfócate en sentir los glúteos. ',
        imagen: 'ruta-a-imagen/lagartijas.jpg'
      },
      {
        name: 'Curtsey Lunge + Squat',
        description: '10 reps, un movimiento completo es 1 rep - Pasa una pierna para atrás e intenta mantener la espinilla de tu pierna delantera derecha. Regresa, haz un Squat, y cambia pierna.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Hip Thrust',
        description: '10 reps- Mete cadera hacia adentro y aprieta glúteos siempre al subir. Cada que subes agrega tensión a las bandas de resistencia al separar levemente tus rodillas. Si tienes barra y discos puedes subirle al peso y disminuír las reps.',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Squat + Jump',
        description: '12 reps - Comienza el movimiento abajo y agarra una mancuerna o cualquier peso. Realiza un squat, deja la pesa y luego haz un salto. Opcional: saltar con la mancuerna. Usa bandas de resistencia. ',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Levantamiento pierna a 90º',
        description: '10 reps una pierna + 10 la otra - Usa bandas de resistencia e intenta llegar a los 90º con tu pierna paralela al piso, esto dependerá de la resistencia de tu banda. ',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      }
    ], 
        Jueves: [
      {
        name: 'Hollow Hold',
        description: '60 seg',
        imagen: 'ruta-a-imagen/crunches.jpg'
      },
      {
        name: 'Plank Jacks',
        description: '20 reps ',
        imagen: 'ruta-a-imagen/lagartijas.jpg'
      },
      {
        name: 'Abs sentada en silla o banca',
        description: '15 reps',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Remo',
        description: '20 reps',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Crunch + Crisscross',
        description: '15 reps + 20 reps ',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Salto “cuerda”',
        description: '40 seg, si tienes cuerda puedes usarla',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      }
    ],        
    Viernes: [
      {
        name: 'Bulgarian Split Squat',
        description: '12 reps cada pierna, primero 12 una pierna y luego 12 la otra',
        imagen: 'ruta-a-imagen/crunches.jpg'
      },
      {
        name: 'Frog Pump',
        description: '30 reps ',
        imagen: 'ruta-a-imagen/lagartijas.jpg'
      },
      {
        name: 'Levantamiento de cadera acostada',
        description: '20 reps cada pierna',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Hip Thrust una sola pierna',
        description: '15 reps',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Reverse Hyperextension',
        description: '10 reps',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      },
            {
        name: 'Abducción de cadera de lado con rango extra',
        description: '20 reps cada pierna',
        imagen: 'ruta-a-imagen/sprinter-skip.jpg'
      }
    ]
    // Más días...
  },
  2: {
    Lunes: [
      {
        name: 'Zancadas',
        description: '3 series de 12 repeticiones por pierna',
        imagen: 'ruta-a-imagen/zancadas.jpg'
      },
      {
        name: 'Dominadas',
        description: '4 series de 8 repeticiones',
        imagen: 'ruta-a-imagen/dominadas.jpg'
      }
    ],
    Martes: [
      {
        name: 'Flexiones con elevación de piernas',
        description: '3 series de 10 repeticiones',
        imagen: 'ruta-a-imagen/flexiones-elevacion-piernas.jpg'
      },
      {
        name: 'Burpees',
        description: '3 series de 15 repeticiones',
        imagen: 'ruta-a-imagen/burpees.jpg'
      }
    ]
    // Más días...
  }
  // Más semanas...
};


  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  return (
    <div className="container">
      <h2>Plan de Entrenamiento en Casa - Semana {selectedWeek}</h2>

      {/* Navegación por semana */}
      <div className="week-navigation">
        {[1, 2, 3, 4].map(week => (
          <button
            key={week}
            className={`week-btn ${selectedWeek === week ? 'active' : ''}`}
            onClick={() => setSelectedWeek(week)}
          >
            Semana {week}
          </button>
        ))}
      </div>
      <br></br>

      {/* Navegación por días */}
      <div className="day-navigation">
        {daysOfWeek.map(day => (
          <button
            key={day}
            className={`day-btn ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <br></br>

      {/* Mostrar ejercicios para el día seleccionado */}
      <div className="row workout-list">
        {workoutPlan[selectedWeek][selectedDay] ? (
          workoutPlan[selectedWeek][selectedDay].map((exercise, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img src={exercise.imagen} className="card-img-top" alt={exercise.name} />
                <div className="card-body">
                  <h5 className="card-title">{exercise.name}</h5>
                  <p className="card-text">{exercise.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay ejercicios planificados para {selectedDay} en la semana {selectedWeek}.</p>
        )}
      </div>
    </div>
  );
};

export default HomeWorkoutPlan;