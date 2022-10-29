import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './homepage';
import Register from './register';
import Login from './login';
import Schedule from "./schedule";

import './files.css'

function Layout() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/train-schedule" element={<Schedule/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default Layout;

