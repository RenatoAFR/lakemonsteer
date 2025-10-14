import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/LogoSemFundo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>

      {/* Botão menu mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navegação */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>


      {/* WhatsApp */}
      <a
        className="btn-whats"
        href="https://wa.me/5518998004639"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco
      </a>
    </header>
  );
}

export default Header;
