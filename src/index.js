import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import promise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const middleWare = [thunkMiddleware, promise];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middleWare.push(logger);
}

const applyMiddleWare = applyMiddleware(...middleWare);

// const enhancers = compose(middleWare, )

const initStore = () => createStore(reducer, {}, applyMiddleWare);

const store = initStore();

const renderedApp = 
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>

ReactDOM.render(renderedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
