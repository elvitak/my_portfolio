import React from "react";
import Hello from "./Hello";
import HeaderComponent from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import CV from "./CV";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderComponent fullName={"Elvita Kalvāne"} />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
