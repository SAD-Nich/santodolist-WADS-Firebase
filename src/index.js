import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/authentication/userContext.jsx';
import App from './App.js';
import Login from './login.jsx';
import Register from './register.jsx';
import ProfilePage from './ProfilePage.jsx'; 
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/dashboard" element={<App />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/account" element={<ProfilePage />} /> 

        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);


reportWebVitals();
