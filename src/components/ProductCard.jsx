import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ image, name, price, description }) {
  const mainImage = Array.isArray(image) ? image[0] : image;

  // Cria a mensagem automática
  const message = `Olá! Tenho interesse no produto "${name}" no valor de R$ ${price}. Poderia me passar mais informações?`;
  const whatsappLink = `https://wa.me/5518998004639?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <img src={mainImage} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p className="price">R$ {price}</p>
      {description && <p className="desc">{description}</p>}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whats"
      >
        Comprar via WhatsApp
      </a>
    </div>
  );
}

export default ProductCard;
