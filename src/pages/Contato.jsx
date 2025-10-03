import "../styles/Contato.css";
import logo from "../assets/LogoSemFundo.png"; // sua logo
import { FaWhatsapp, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

function Contato() {
  return (
    <section className="contato">
      {/* Logo e título */}
      <div className="contato-header">
        <img src={logo} alt="LakeMonsteer" className="contato-logo" />
        <h1>
          Entre em <br /> Contato Conosco
        </h1>
        <p>
          Tem alguma dúvida, sugestão ou deseja comprar um produto? Estamos
          prontos para ajudar!
        </p>
      </div>

      <div className="contato-container">
        {/* Formulário */}
        <form className="contato-form">
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" />

          <label>E-mail</label>
          <input type="email" placeholder="Seu e-mail" />

          <label>Telefone</label>
          <input type="tel" placeholder="Seu telefone" />

          <label>Mensagem</label>
          <textarea placeholder="Escreva sua mensagem..." />

          <button type="submit" className="btn-verde">
            Enviar Mensagem
          </button>
        </form>

        {/* Opções de contato */}
        <div className="contato-opcoes">
          <a
            href="https://wa.me/5518998004639"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card verde"
          >
            <FaWhatsapp /> Falar pelo WhatsApp
          </a>
          <a
            href="mailto:lakemonster@hotmail.com"
            className="contato-card azul"
          >
            <FaEnvelope /> Enviar um e-mail
          </a>
          <a href="tel:+5518998004639" className="contato-card verde">
            <FaPhone /> Telefone
          </a>
          <a
            href="https://www.instagram.com/lake_monsteranteninhas"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card rosa"
          >
            <FaInstagram /> Redes sociais
          </a>
        </div>
      </div>

      {/* Rodapé simples */}
      <footer className="contato-footer">
      </footer>
    </section>
  );
}

export default Contato;
