import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

//RENDERS APP COMPONENT USING HTML ID 'root'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);