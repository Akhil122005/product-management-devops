import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/Editproduct/:id" element={<Editproduct />} />
      </Routes>
    </>
  );
}

export default App;

