import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/jeux-video">Jeux vidéo</Link></li>
          <li><Link to="/musique">Musique</Link></li>
          <li><Link to="/echecs">Échecs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/aide">Aide</Link></li>
          <li><Link to="/auteur">auteur</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
