import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Classrooms, Courses, Countdown } from './pages';
import { Styles } from './types';
import Navbar from "./components/Navbar";


export default function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/countdown" element={<Countdown/>} />
          <Route path="/classrooms" element={<Classrooms/>} />
          <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
  );
}
