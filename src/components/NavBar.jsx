import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import "./NavBar.css";

export default function NavBar() {
  const navLink = {
    fontSize: "1.5rem",
  };
  return (
    <nav>
      <a href="/">
        <img className="logo-nav" src={logo} alt="logo" />
      </a>
      <ul className="nav-ul">
        <li className="nav_link">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav_link">
          <Link to="/about">À Propos</Link>
        </li>
        <li className="nav_link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
