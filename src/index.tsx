import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const root = document.getElementById('root');

if (!root!) {
  throw new Error('root not found');
}

const container = createRoot(root);
container.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </React.StrictMode>,
);
