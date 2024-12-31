// src/components/CartButton.js

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Calculate the total number of items in the cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      className="floating-cart" // Changed "class" to "className" (React uses `className` for styling)
      onClick={() => navigate('/cartpage')} // Ensure `/cartpage` matches your routing setup
    >
      🛒 {itemCount}
    </button>
  );
};

export default CartButton;
