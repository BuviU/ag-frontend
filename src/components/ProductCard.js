// src/components/ProductCard.js

import React from 'react';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="ProductCard">
      {product.imageUrl ? (
        <img className="productImg"
          src={product.imageUrl} // Use the correct image URL
          alt={product.name}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      ) : (
        <p>No Image Available</p>
      )}
      <h3 className="productName">{product.name}</h3>
      <p className="productDescription">{product.description}</p>
      <p className="productPrice">${product.price.toFixed(2)}</p>
      <button className="addToCartBtn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
