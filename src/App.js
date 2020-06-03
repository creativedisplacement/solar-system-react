import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './components/Planets/Planets';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PlanetsData from './data/planets.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>
      <Planets planets={PlanetsData} />
      <Footer />
    </div>
  );
}

export default App;
