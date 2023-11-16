import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WeatherPage from './pages/Weather/WeatherPage';
import CurrentPage from './pages/currents/CurrentPage';

function App() {
  return (
    <div className="App">
    <Routes>
      
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/weather' element={<WeatherPage/>}/>
      <Route exact path='/current' element={<CurrentPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
