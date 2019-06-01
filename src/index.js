import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";

const productReducer = (state = [], action) => {
  return state;
}

const userReducer = (state = '', action) => {
  if (action.type === 'updateUser') {
    return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  product : productReducer,
  user : userReducer
})

// 초기화 과정

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 1. subscribe, 3: 데이터 수신
store.subscribe(() => console.log('subscriber: ', store.getState()));

// 2. publish: action dispatch
const action = {
  type: 'updateUser',
  payload: {
    newState: 'Tom'
  }
}
store.dispatch(action);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
