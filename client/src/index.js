import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './landingPage/home/HomePage';
import Brokerage from './landingPage/pricing/Brokerage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    <Brokerage />
  </React.StrictMode>
);