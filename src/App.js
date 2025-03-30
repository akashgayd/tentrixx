
import './App.css';
import Home from "./Componant/home/home";
import About from './Componant/pages/About/About';
import {Route, Routes } from "react-router-dom";
import Resorses from './Componant/pages/resorse/Resorses';
import Faq from './Componant/pages/resorse/FAQ/faq';
import Career from './Componant/pages/career/Career';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resorses" element={<Resorses />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/career" element={<Career />} />
    </Routes>


  );
}

export default App;
