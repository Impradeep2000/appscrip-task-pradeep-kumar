import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
