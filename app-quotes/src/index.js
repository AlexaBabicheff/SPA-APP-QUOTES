import React from 'react';
import ReactDOM from 'react-dom/clients';
import './index.css';
import App from './App';
import Quote from "./quotes.json"


const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<Quote />);
