import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const responseReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FEELING':
            state.feeling = action.payload;
            return state;
            break;
        case 'UNDERSTANDING':
            state.understanding = action.payload;
            return state;
            break;
        case 'SUPPORT':
            state.support = action.payload;
            return state;
            break;
        case 'COMMENT':
            state.comments = action.payload.comment;
            state.flagged = action.payload.flagged;
            return state;
            break; 
        case 'CLEAR':
            return {};
            break;
        default:
            return state;
    }
}



const storeInstance = createStore(
    combineReducers({
        responseReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
