import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './public/bootstrap-resource/bootstrap.css';

import './public/bootstrap-resource/mdb.min.css';


import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



