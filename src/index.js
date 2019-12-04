import App from './components/App';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';


const defaultState = { 
  //checked: false,
  appName: 'conduit',
  articles: null
};

const reducer = function(state = defaultState, action) {
  
  return state;
};

const store = createStore(reducer);



ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
