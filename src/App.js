import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './components/Planets';
import Details from './components/PlanetDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>
      <Planets />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
