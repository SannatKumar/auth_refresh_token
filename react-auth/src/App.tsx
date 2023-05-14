import React from 'react';
import './App.css';
import { Login } from './componenets/Login';
import { Register } from './componenets/Register';
import { Nav } from './componenets/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
