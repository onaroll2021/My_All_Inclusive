import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home.jsx';
import Register from './Register';
import PlaceOrder from './PlaceOrder';
import PlacedOrder from './PlacedOrder';
import AllInclusive from './AllInclusive';
import User from './User';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/allInclusive" element={<AllInclusive />} />
        <Route path="/register" element={<Register />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<PlacedOrder />} />
      </Routes>
    </Router>
  )

}

export default App;