import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainRoutingComponent from './MainRoutingComponent';
import './font.css';
import './simpleForm.css'
// import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <MainRoutingComponent />
  </BrowserRouter>,
  document.getElementById('root')
);