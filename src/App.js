import React, { useState } from 'react';
import './App.css';
import Question from './Question';

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
    '¿Cuáles son los pololos más pelaos?',
    '¿cuantas minas se ha comido el gormi este año?',
    '¿quien va ser el último miembro de campe en egresar?',
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
  ];

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', flex: 1, textAlign: 'center', marginTop: '20%' }}>
      <style>{'body { background-color: #22cde0; }'}</style>
      <Question question={questions[currentQuestion]} />
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCurrentQuestion(Math.floor(Math.random() * questions.length))} style={{ backgroundColor: '#c46637', color: 'white', fontSize: 20, padding: 15, borderRadius: 25, border: 'none' }}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;
