import React from 'react';
import Quiz from './components/Quiz';
import Design from './components/Design';
import "./App.css";

function App() {
  return (
    <div className='app-container'>
      <div className='design-container'>
        <Design />
      </div>
      <div className='quiz-container'>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
