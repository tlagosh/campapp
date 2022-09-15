import React, { useState } from 'react';
import './App.css';
import Question from './Question';
import Chile from './assets/chile.png';
import campo from './assets/campo.png';

var sectionStyle = {
  backgroundImage: "url(" + Chile + ")",
  backgroundSize: 'cover',
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    '¿Cuántos campos han habido?',
    '¿Cuál es el número de polera de Gori?',
    '¿Cuál es el número de polera de León?',
    '¿Cuál es el número de polera de Tomás?',
    '¿Cuál es el número de polera de Pedro?',
    '¿Cuál es el número de polera de Juanchi?',
    '¿Cuál es el número de polera de Vial?',
    '¿Cuánto mide el campo (m2) (Solo la parte del quincho)?',
    '¿Fecha cumpleaños Fran V?',
    '¿Fecha cumpleaños Isa Vial?',
    '¿Fecha cumpleaños Rosario V?',
    '¿Fecha cumplaeños Trini C?',
    '¿Cuantas minas se ha comido el gormi este año?',
    '¿En qué trabaja el coloro?',
    '¿En qué trabaja el carepa?',
    '¿En qué trabaja el nelly?',
    '¿En qué trabaja water?',
    '¿En qué trabaja el gormi?',
    '¿En qué trabaja Tomás?',
    '¿Quién apagó tele primero en el primer campo?',
    '¿Qué marca de chelas había en el primer campo?',
    '¿Como se llamaba la cabra que invitó a gori a su casa en pichilemu?',
    'Nombre de la calle donde estaba la cabaña de pichilemu',
    'Quién mintió toda su infancia su fecha de nacimiento',
    'Nombre 6 hermanos de Jose Pedro Claude',
    'Nombre los 3 más altos de Campo',
    'Cuántas regiones tiene Chile',
    'Nombre dos partes de la cueca',
    'Nombre a 8 de los jugadores de la selección chilena',
    'Cuales son las ligas en las que ha jugado Campo FC',
    'Cerveza favorita del Nelly',
    'Conteo oficial de mujeres que han sido cortejadas con éxito por los solteros de Campo',
    '¿Quiénes de campo han sido grabados o fotografiados vestidos de mujer?',
    '¿Qué día festivo se pusieron a pololear Tomás con la Fran?',
    'Nombre 5 paseos emblemáticos de Campo',
    '¿A cuántos Campos asistió Clemente "el amateur" Correa?',
    '¿En qué celebración se sacó a Clemente "el amateur" Correa por primera vez del grupo?',
    '¿Cómo se llama la ex de Vicente Vial?',
  ];

  shuffleArray(questions);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setCurrentQuestion(0);
      alert('Se acabaron las preguntas');
    }
  };

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center', marginTop: '20%' }}>
      <style>{'body { background-image: url(' + campo + '); background-size: cover; }'}</style>
      <Question question={questions[currentQuestion]} />
      <div style={{ marginTop: 20 }}>
        <button onClick={handleNextQuestion} style={{...sectionStyle, fontSize: 20, padding: 15, borderRadius: 25, border: 'none', color: 'transparent' }}>Siguiente
          <p></p>
        </button>
      </div>
    </div>
  );
}

export default App;
