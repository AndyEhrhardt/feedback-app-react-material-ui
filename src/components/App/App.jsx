import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom';



import './App.css';

function App() {
  useEffect(() => {
    getResponses();
  }, [])
  const getResponses = () => {
    axios.get('/responses').then( response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    <Router>
      <Link to="/pageOne">Next</Link>
      <Route>
        
      </Route>
    </Router>

    </div>
  );
}

export default App;
