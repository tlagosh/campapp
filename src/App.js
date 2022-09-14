import React, { useState } from 'react';
import './App.css';
import Question from './Question';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
      'What is the capital of France?',
      'Who is CEO of Tesla?',
      'The iPhone was created by which company?',
      'How many Harry Potter books are there?',
  ]

  window.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    else {
      alert('You have reached the end of the quiz!')
    }
  });

  return (
    <div className="App">
      <style>{'body { background-color: #22cde0; }'}</style>
      <Question question={questions[currentQuestion]} />
    </div>
  );
}

export default App;
