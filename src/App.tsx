import React from 'react';
import { ContainerApp } from './components/AppContext';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ResultsQuestions } from './components/ResultsQuestions';
import './App.css';

function App() {

  return (
    <ContainerApp>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/results' element={<ResultsQuestions />}/>
        </Routes>
      </HashRouter>
    </ContainerApp>
  );
}

export default App;
