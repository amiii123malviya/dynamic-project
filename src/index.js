
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';


import App from './App';
/*font awesome link*/
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
/*bootstrap link*/
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <BrowserRouter>  
  <App />
  </BrowserRouter>
    , 
  document.getElementById('root')
);

