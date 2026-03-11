import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import JeuxVideo from "./pages/JeuxVideo";
import Musique from "./pages/Musique";
import Echecs from "./pages/Echecs";
import Contact from "./pages/Contact";
import Aide from "./pages/Aide";
import Auteur from "./pages/Auteur";


function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jeux-video" element={<JeuxVideo />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/echecs" element={<Echecs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/auteur" element={<Auteur />} />
      </Routes>
    </Router>
  );
}

export default App;
