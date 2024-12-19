import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createRoot } from "react-dom/client";





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
