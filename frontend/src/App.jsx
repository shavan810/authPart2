import { useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Register-Pages" element={<Register/>} />
    </Routes>
  );
}

export default App;
