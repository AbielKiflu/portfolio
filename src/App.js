import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
