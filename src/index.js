import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter >
     <App />
  </BrowserRouter>,
  rootElement
);
