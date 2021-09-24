import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const responseReducer = (state = {}, action) => { 
    if (!/^@/.test(action.type)){
        state[action.key] = action.payload;
        window.state=state;
        return state;
    } else return state
}


const storeInstance = createStore(
    combineReducers({
        responseReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
