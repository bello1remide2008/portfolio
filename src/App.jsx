import { Routes, Route, } from "react-router-dom";
import  Hero from "./components/Hero";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

  function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App;