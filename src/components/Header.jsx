import { Link } from "react-router-dom";
import "../styles/Header.css"; // podemos separar estilos
import logo from "../assets/LogoSemFundo.png"; // <- coloque sua logo em src/assets/logo.png

function Header() {
  return (
    <header className="header">
      {/* Logo clicável para a Home */}
      <Link to="/" className="logo">
        <img src={logo} alt="LogoSemFundo" className="logo-img" />
      </Link>
      {/* Navegação */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    
      {/* Botão WhatsApp */}
      <a
        className="btn-whats"
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale Conosco
      </a>
    </header>
  );
}

export default Header;
