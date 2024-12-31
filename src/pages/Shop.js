import React from "react";
import Products from "../components/Products";
import { CartProvider } from '../context/CartContext'; // Import CartContext
import CartButton from '../components/CartButton';




const Shop = () => {
  return (
    <CartProvider>
        <CartButton />   
        <Products />
    </CartProvider>

       

  );
};

export default Shop;