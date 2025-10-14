import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Produtos.css";

// Lista temporária de produtos
const produtos = [
  //Acessórios
  //Antenas
  {
    id: 21,
    name: "Robozinho – Tamanho 10mm",
    price: "15,00",
    description: "Robozinho da Lake Monster são construídos em EVA, girador/snap, anzol wide gape 3/0 e miçanga selecionada. São indicadas para a pesca de superfície para a captura de grandes Tambacus, Tambaquis, utilizando boias cevadeiras. ",
    type: "Antenas",
    images: [ 
      require("../assets/antenas/Robozinho10mm/10mm1.jpeg"),
      require("../assets/antenas/Robozinho10mm/10mm2.jpeg"),
      require("../assets/antenas/Robozinho10mm/10mm3.jpeg"),
      require("../assets/antenas/Robozinho10mm/10mm4.jpeg"),
    ]
  },
  {
    id: 22,
    name: "Robozinho – Tamanho 12mm",
    price: "15,00",
    description: "Robozinho da Lake Monster são construídos em EVA, girador/snap, anzol wide gape 3/0 e miçanga selecionada. São indicadas para a pesca de superfície para a captura de grandes Tambacus, Tambaquis, utilizando boias cevadeiras. ",
    type: "Antenas",
    images: [ 
      require("../assets/antenas/Robozinho12mm/12mm1.jpeg"),
      require("../assets/antenas/Robozinho12mm/12mm2.jpeg"),
      require("../assets/antenas/Robozinho12mm/12mm3.jpeg"),
    ]
  },
  {
    id: 26,
    name: "Anteninha Bolachão",
    price: "14,75",
    description: "Tamanho 20 mm. Anzol Wide Gape 3/0 ",
    type: "Antenas",
    images: [ 
      require("../assets/antenas/BolachaoAmarelo.jpeg"),
      require("../assets/antenas/BolachaoBege.jpeg"),
      require("../assets/antenas/BolachaoBranco.jpeg"),
      require("../assets/antenas/BolachaoMarron.jpeg"),
      require("../assets/antenas/BolachaoMarronClaro.jpeg"),
    ]
  },
  //Boias
  {
    id: 3,
    name: "Boia Guia N2 - Rosa/Branca",
    price: "8,00",
    description: "Boia Guia 10 Unidades.",
    type: "Boias",
    image: "https://via.placeholder.com/300x200?text=Carretilha"
  },
  {
    id: 4,
    name: "Boia Cavadeira - Rocket Albatroz Fishing",
    price: "29,90",
    description: "Boia Cavadeira.",
    type: "Boias",
    image: "https://via.placeholder.com/300x200?text=Carretilha"
  },

  //Equipamentos
  {
    id: 5,
    name: "Vara Lumis Ibiza - Molinete",
    price: "00,00",
    description: "5`9 Pés - 25lbs - 1.80m / 2 Partes.",
    type: "Equipamentos",
    image: "https://via.placeholder.com/300x200?text=Vara+de+Pesca"
  },
  {
    id: 30,
    name: "Vara Granada - Telescópia",
    price: "129.90",
    description: "Vara de Pesca Maruri Granada é conhecida por ser leve, compacta e resistente. Algumas de suas características são: Material: Fibra de vidro. Ação: Ultraleve, perfeita para pescadores que buscam uma experiência mais desafiadora com peixes de todos os portes. Flexibilidade: Sua estrutura flexível proporciona uma luta emocionante com os peixes, tornando a captura mais divertida. Passadores: Possui um bom número de passadores para distribuir a força de tração uniformemente, aumentando a durabilidade do equipamento durante o combate com o peixe. Proteção: Inclui um capacete protetor para os passadores, garantindo mais segurança e facilitando a montagem. Cores: Disponível na cor verde. ",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/VaraGranadaVerde.jpeg")]
  },
  {
    id: 1,
    name: "Alicate de Pescas - Bestfer",
    price: "50,00",
    description: "Bico Longo - 7,5 Polegadas.",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/AlicateBicoLongo75.jpeg")]
  },
  {
    id: 23,
    name: "Victoria Softline – Amarela",
    price: "29,90",
    description: "(22lb/ 10kg – 0.35mm  120M) A linha monofilamento Victoria Softline foi projetada para as mais diversas modalidades de pesca, em especial a de pesqueiros. Linha de alta performance, com tratamento especial, proporcionando maior maciez e durabilidade. Altíssima resistência à abrasão, contém proteção ultravioleta, baixa memória, alta resistência a nós, impermeável e alta visibilidade.",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/LinhaVictoriaAmarelo.jpeg")]
  },
  {
    id: 24,
    name: "Victoria Softline – Verde",
    price: "29,90",
    description: "(22lb/ 10kg – 0.35mm  120M) A linha monofilamento Victoria Softline foi projetada para as mais diversas modalidades de pesca, em especial a de pesqueiros. Linha de alta performance, com tratamento especial, proporcionando maior maciez e durabilidade. Altíssima resistência à abrasão, contém proteção ultravioleta, baixa memória, alta resistência a nós, impermeável e alta visibilidade. ",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/LinhaVictoriaVerde.jpeg")]
  },
  {
    id: 27,
    name: "Dourado – Transparente",
    price: "13,00",
    description: "(17,2lb/ 7,8kg – 0.40mm  100M) A linha monofilamento Dourado foi projetada para as mais diversas modalidades de pesca, em especial a de pesqueiros. Linha de alta performance e durabilidade. Altíssima resistência à abrasão, baixa memória, alta resistência a nós e impermeável. Apresenta o melhor custo-benefício do melhor de linhas. ",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/LinhaDouradoTransp.jpeg")]
  },
  {
    id: 25,
    name: "Anzol Pinnacle Pacu Black",
    price: "29,90",
    description: "(Tamanho 3/0) O anzol Pacu da Pinnacle é confeccionado em aço carbono de alta qualidade, resistente à corrosão e é fabricado com arames de espessura maior. Esse modelo conta com pontas extremamente afiadas que garantem penetração total e segurança nas suas capturas. ",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/AnzolPacuBlack1.jpeg"),
             require("../assets/equipamentos/AnzolPacuBlack2.jpeg")
    ]
  },
  {
    id: 29,
    name: "Anzol Chinu - FTK",
    price: "45,90",
    description: "(Tamanho 1/0 - 50 Unidades) O Anzol de Pesca FTK é a escolha ideal para pescadores que buscam eficiência e durabilidade em suas pescarias. Fabricado com materiais de alta qualidade e tecnologia avançada, o Anzol FTK e resistente o suficiente para enfrentar os desafios mais exigentes da pesca.",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/AnzolChinuFTK.jpeg")]
  },
  {
    id: 28,
    name: "Stopper – Tamanho S",
    price: "00,00",
    description: "(Trava chumbo) Substitui o nó de correr e evita danificar a linha. Ideal para regular a altura de boia. Permite posicionar com facilidade os engates de pernadas. Prático para a confecção de chicotes de praia.  ",
    type: "Equipamentos",
    images: [require("../assets/equipamentos/StoperSTravaChumbo.jpeg")]
  },
  //Iscas
  {
    id: 2,
    name: "Isca Artificial Premium",
    price: "49,90",
    description: "Design realista que atrai os maiores peixes.",
    type: "Isca",
    image: "https://via.placeholder.com/300x200?text=Isca+Artificial"
  },
  //Manhosinhos
  {
    id: 15,
    name: "Manhosinho Borboleta – Tamanho 09mm",
    price: "16,00",
    description:
      "O Manhosinho Borboleta da Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada.",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Borboleta9mm/Manhosinho9mmLaranja.jpeg"),
      require("../assets/manhosinhos/Borboleta9mm/Manhosinho9mmMarron.jpeg"),
      require("../assets/manhosinhos/Borboleta9mm/Manhosinho9mmPreto.jpeg"),
      require("../assets/manhosinhos/Borboleta9mm/Manhosinho9mmPretoListra.jpeg")
    ]
  },
  {
    id: 16,
    name: "Manhosinho Borboleta – Tamanho 10mm",
    price: "16,00",
    description:
      "O Manhosinho Borboleta da Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada.",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Borboleta10mm/10mm1.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm2.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm3.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm4.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm5.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm6.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm7.jpeg"),
      require("../assets/manhosinhos/Borboleta10mm/10mm8.jpeg")
    ]
  },
  {
    id: 17,
    name: "Manhosinho Borboleta – Tamanho 12mm",
    price: "16,00",
    description:
      "O Manhosinho Borboleta da Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada.",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Borboleta12mm/12mm1.jpeg")
    ]
  },
  {
    id: 18,
    name: "Manhosinho Cruzado – Tamanho 9mm",
    price: "16,00",
    description:
      "O Manhosinho Cruzado Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada. ",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Cruzado9mm/9mm1.jpeg"),
      require("../assets/manhosinhos/Cruzado9mm/9mm2.jpeg"),
      require("../assets/manhosinhos/Cruzado9mm/9mm3.jpeg"),
    ]
  },
  {
    id: 19,
    name: "Manhosinho Cruzado – Tamanho 10mm",
    price: "16,00",
    description:
      "O Manhosinho Cruzado Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada. ",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Cruzado10mm/10mm1.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm2.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm3.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm4.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm5.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm6.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm7.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm8.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm9.jpeg"),
      require("../assets/manhosinhos/Cruzado10mm/10mm10.jpeg"),
    ]
  },
  {
    id: 20,
    name: "Manhosinho Cruzado – Tamanho 12mm",
    price: "16,00",
    description:
      "O Manhosinho Cruzado Lake Monster foi projetado para os dias em que a atividade dos peixes está baixa e mais seletiva. Indicado para captura de tambaquis na superfície juntamente com a boia cevadeira. Chicote de nylon com 3m de comprimento, isca manhosinho com flutuadores em EVA, anzol Morigen n.º 14 e miçanga selecionada. ",
    type: "Manhosinho",
    images: [
      require("../assets/manhosinhos/Cruzado12mm/12mm1.jpeg"),
    ]
  },
  //Miçangas
  {
    id: 6,
    name: "Miçangas Esportes (Mista)",
    price: "6,90",
    description:
      "A Miçanga Esportes é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de anteninhas ou robozinhos, além de ser excelente para o uso no diretinho ou palminho.",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaEsportMista.jpeg"),
    ]
  },
  {
    id: 7,
    name: "Miçangas Esportes (Basquete)",
    price: "6,90",
    description:
      "A Miçanga basquete é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de anteninhas ou robozinhos, além de ser excelente para o uso no diretinho ou palminho.",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaEsportBasquete.jpeg"),
    ]
  },
  {
    id: 8,
    name: "Miçangas Esportes (Tenis)",
    price: "6,90",
    description:
      "A Miçanga Tenis é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de anteninhas ou robozinhos, além de ser excelente para o uso no diretinho ou palminho.",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaEsportTenis.jpeg"),
    ]
  },
  {
    id: 9,
    name: "Miçangas Esportes (Baisebol)",
    price: "6,90",
    description:
      "A Miçanga Baisebol é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de anteninhas ou robozinhos, além de ser excelente para o uso no diretinho ou palminho.",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaEsportBaisibol.jpeg"),
    ]
  },
  {
    id: 10,
    name: "Miçangas Sorocaba Vermelha",
    price: "6,90",
    description:
      "A Miçanga sorocaba é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de Pé de Galinha ou manhosinhos, além de ser excelente para o uso no diretinho ou palminho. Sua atratividade e versatilidade fazem dela uma escolha certeira para fisgar os maiores exemplares. ",
    type: "Micangas",
    image: "https://via.placeholder.com/300x200?text=Vara+de+Pesca"
  },
  {
    id: 11,
    name: "Miçangas Abacaxi Verde Neon",
    price: "6,90",
    description:
      "A Miçanga Abacaxi é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de Pé de Galinha ou manhosinhos, além de ser excelente para o uso no diretinho ou palminho. Sua atratividade e versatilidade fazem dela uma escolha certeira para fisgar os maiores exemplares.  ",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaAbacVerde.jpeg"),
    ]
  },
  {
    id: 12,
    name: "Miçangas Abacaxi Roxa/Branco",
    price: "6,90",
    description:
      "A Miçanga Abacaxi é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de Pé de Galinha ou manhosinhos, além de ser excelente para o uso no diretinho ou palminho. Sua atratividade e versatilidade fazem dela uma escolha certeira para fisgar os maiores exemplares.",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaAbacRoxoBranco.jpeg"),
    ]
  },
  {
    id: 13,
    name: "Miçangas Abacaxi Azul",
    price: "6,90",
    description:
      "A Miçanga Abacaxi é perfeita para pescadores que buscam capturar grandes tambacus e tambaquis com eficiência. Disponível em pacotes com 08 unidades. Ideal para a montagem de Pé de Galinha ou manhosinhos, além de ser excelente para o uso no diretinho ou palminho. Sua atratividade e versatilidade fazem dela uma escolha certeira para fisgar os maiores exemplares.",
    type: "Micangas",
    image: "https://via.placeholder.com/300x200?text=Vara+de+Pesca"
  },
  {
    id: 14,
    name: "Miçangas Empanada P32",
    price: "8,75",
    description:
      "Ideal para pesca em pesqueiros, as miçangas de pesca têm a finalidade de imitar os mais variados tipos de ração, trato/ceva, sementes e frutas que a maioria dos peixes como Pacu, Tambacu, Tambaqui, Tilápia e muitos outros estão acostumados a comer, atraindo-os mais facilmente para perto do anzol. Miçanga Empanada Pode ser usado em conjunto com EVA e ANZOL construindo qualquer modelo de anteninha ou no palminho para sub superfície entre 5 a 30 centimetros para baixo, revestida com ração. Contem 10 Unidades. ",
    type: "Micangas",
    images: [
      require("../assets/micangas/MicangaEmpanada.jpeg"),
    ]
  }
  //Vestimentas
];

function Produtos() {
  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [zoomImg, setZoomImg] = useState(null); // <- estado para zoom

  const produtosFiltrados = produtos.filter((item) => {
    const nomeMatch = item.name.toLowerCase().includes(busca.toLowerCase());
    const tipoMatch = filtroTipo ? item.type === filtroTipo : true;
    return nomeMatch && tipoMatch;
  });

  return (
    <div className="produtos-page">
      <h2>Nossos Produtos</h2>

      {/* Área de Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Todos os Tipos</option>
          <option value="Acessorios">Acessórios</option>
          <option value="Antenas">Antenas</option>
          <option value="Boias">Boias</option>
          <option value="Equipamentos">Equipamentos</option>
          <option value="Isca">Iscas</option>
          <option value="Manhosinho">Manhosinho</option>
          <option value="Micangas">Miçangas</option>
          <option value="Vestimentas">Vestimentas</option>
        </select>
      </div>

      {/* Produtos filtrados */}
      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((item) => (
            <div key={item.id} onClick={() => setProdutoSelecionado(item)}>
              <ProductCard
                image={item.images ? item.images[0] : item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>

      {/* Modal */}
      {produtoSelecionado && (
        <div
          className="modal-overlay"
          onClick={() => setProdutoSelecionado(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{produtoSelecionado.name}</h3>

            <div className="modal-images">
              {(produtoSelecionado.images || [produtoSelecionado.image]).map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${produtoSelecionado.name} ${index + 1}`}
                    onClick={() => setZoomImg(img)} // clique abre zoom
                    style={{ cursor: "zoom-in" }}
                  />
                )
              )}
            </div>

            <p>
              <strong>Preço:</strong> R$ {produtoSelecionado.price}
            </p>
            <p>{produtoSelecionado.description}</p>
            <button onClick={() => setProdutoSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}

      {/* Zoom da Imagem */}
      {zoomImg && (
        <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoom" className="zoom-img" />
        </div>
      )}
    </div>
  );
}

export default Produtos;
