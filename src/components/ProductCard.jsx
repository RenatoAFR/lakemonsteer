import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ image, name, price, description }) {
  // Se image for array -> pega a primeira, se não -> usa direto
  const mainImage = Array.isArray(image) ? image[0] : image;

  return (
    <div className="product-card">
      <img src={mainImage} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p className="price">R$ {price}</p>
      {description && <p className="desc">{description}</p>}
      <button className="btn-whats">
        Comprar via WhatsApp
      </button>
    </div>
  );
}

export default ProductCard;
