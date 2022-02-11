import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,} from "react-router-dom";
import { GlobalStyle } from './index.styled';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter  basename="/goit-react-hw-05-moviess/">
    <GlobalStyle />
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

