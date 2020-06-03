import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './components/Planets/Planets';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [getPlanets, setPlanets] = useState([]);

  async function fetchData() {
    const response = await fetch('./planets.json');
    response
      .json()
      .then((response) => setPlanets(response))
      .catch((error) => setErrors(error));
  }

  useEffect(() => {
    fetchData();
  }, [getPlanets]);

  let activeComponent = null;
  if (hasError) {
    activeComponent = <Error />;
  } else {
    activeComponent = <Planets planets={getPlanets} />;
  }

  return (
    <div className='App'>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>
      {activeComponent}
      <Footer />
    </div>
  );
};

export default App;
