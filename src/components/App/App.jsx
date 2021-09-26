import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PageOne from '../PageOne/PageOne.jsx'
import PageTwo from '../PageTwo/PageTwo'
import PageThree from '../PageThree/PageThree'
import PageFour from '../PageFour/PageFour'
import Review from '../Review/Review'
import ThankYou from '../ThankYou/ThankYou'
import Admin from '../Admin/Admin'
import Box from '@mui/material/Box';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Paper from '@mui/material/Paper';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {

  useEffect(() => {
    getResponses();
  }, [])

  const getResponses = () => {
    axios.get('/responses').then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }
  

  return (
    <div className='App'>
      <header className='App-header'>
        <Box className="app-title" sx={{ fontWeight: 'light', fontFamily: 'default', fontSize: 50 }}>Feedback!</Box>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
            <Route path="/" exact>
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <PageOne className="fade" /> 
              </Paper>
            </Route>
            <Route path="/pageTwo" exact> 
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <PageTwo className="fade" /> 
              </Paper>
            </Route>
            <Route path="/pageThree" exact>
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <PageThree /> 
              </Paper>
            </Route>
            <Route path="/pageFour" exact> 
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <PageFour /> 
              </Paper>
            </Route>
            <Route path="/review" exact> 
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <Review /> 
              </Paper>
            </Route>
            <Route path="/thankYou" exact> 
              <Paper className="feedback-wrap" elevation="11" variant="elevation">
                <ThankYou /> 
              </Paper>
            </Route>
          
        <Route path="/admin" exact> <Admin /> </Route>
      </Router>
      {/*All Routes are set to exact so that only one page will show on screen at a time */}
    </div>
  );
}

export default App;
