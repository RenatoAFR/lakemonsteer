import "../styles/Home.css";
import monstro from "../assets/LogoSemFundo.png"; 
import ProductCard from "../components/ProductCard";
import Pescador from "../assets/SobreLoja.png";

import anteninhaBolachaoImg from "../assets/antenas/BolachaoAmarelo.jpeg";
import manhosinhoBorboleta12Img from "../assets/manhosinhos/Borboleta12mm/12mm1.jpeg";
import robozinho12Img from "../assets/antenas/Robozinho12mm/12mm1.jpeg";


// Exemplo de logos de parceiros
//import parceiro1 from "../assets/parceiro1.png";
//import parceiro2 from "../assets/parceiro2.png";
//import parceiro3 from "../assets/parceiro3.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home">
        <div className="home-texto">
          <h1>
            LAKEMONSTER – <br /> ARTIGOS DE PESCA QUE DESAFIAM A NATUREZA!
          </h1>
          <p>
            Equipamentos de alta performance para pescadores que não têm medo de
            monstros.
          </p>
          <div className="home-botoes">
            <a href="/produtos" className="btn-verde">
              VER PRODUTOS
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-azul"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>

        <div className="home-imagem">
          <img src={monstro} alt="Monstro do Lago" />
        </div>
      </section>

      {/* Nossos Destaques */}
      <section className="destaques">
        <h2>NOSSOS DESTAQUES</h2>
        <div className="destaques-container">
          <ProductCard
            name="Anteninha Bolachão"
            price="R$ 9,99"
            image={anteninhaBolachaoImg}
            description="SAIBA MAIS"
            btn-whats="btn-verde"
          />

          <ProductCard
            name="Manhosinho Borboleta"
            price="R$ 29,99"
            image={manhosinhoBorboleta12Img}
            description="COMPRAR PELO WHATS"
            btn-whats="btn-azul"
          />

          <ProductCard
            image={robozinho12Img}
            name="Robozinho 12mm"
            price="R$ 9,99"
            description="FARPA NGRSSMP"
            btn-whats="btn-verde"
          />

        </div>
      </section>

      {/* Sobre a Loja */}
      <section className="sobre">
        <div className="sobre-conteudo">
          <div className="sobre-imagem">
            <img src={Pescador} alt="Pescador" />
          </div>
          <div className="sobre-texto">
            <h2>SOBRE A LOJA</h2>
            <p>
              A <strong>LakeMonster</strong> nasceu para trazer equipamentos de
              pesca de alta qualidade para quem leva o esporte a sério.
            </p>
            <p>
              Nossa missão é unir paixão e performance, sempre com estilo único.
            </p>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="parceiros">
        <h2>NOSSOS PARCEIROS</h2>
        <div className="parceiros-grid">
          
        </div>
      </section>
    </>
  );
}

export default Home;
