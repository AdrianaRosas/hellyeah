import React from 'react';
import './App.css';
import Home from './components/Home'
import Job from './components/Job'

function App() {
  return (
    <div className="elements">
    <section className="home">
    < Home />
    </section>
    <section className="album-photo-container">
      <Job />
    </section>
    
    </div>
  );
}

export default App;
