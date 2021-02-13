import './index.scss'
import React from 'react';
import {render} from 'react-dom';

// Components
import Header from '../components/header'

// Specifications
const title = 'Header of';
 
render(
  <div>
    <Header title={title} /><br/>
    <h2>React + Webpack5 for GitHub Workshop</h2>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
