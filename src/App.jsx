import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import PageNotFound from "./Pages/PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
