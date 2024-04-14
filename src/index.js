import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Styles applied globally across your app
import App from './App'; // Your main App component
import About from './About'; // Your About component for the "/about" route
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // For routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// Optionally, you can call reportWebVitals to log performance
reportWebVitals();