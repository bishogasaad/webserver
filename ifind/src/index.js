import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './head';
import App from './App.js';
import Out from './out.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Head />, document.getElementById('head'));
if(document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'));
if(document.getElementById('new'))
ReactDOM.render(<Out />, document.getElementById('new'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
