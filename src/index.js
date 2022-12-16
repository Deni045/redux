import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const reducer = (state, action) =>{
  if(action.type === 'plus'){
    return state + 1
  }
  if(action.type === 'minus'){
    return state - 1
  }
  if(action.type === 'reset'){
    return state
  }
  return 0
  }

const store = createStore(reducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

