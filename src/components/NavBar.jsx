import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <img className="logo-nav" src="./src/assets/logo.png" alt="logo" />
            <ul className="nav-ul">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À Propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}


