// src/pages/ProductPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Adjusted path for ProductCard

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // Fetch products with images populated
    axios
      .get('http://localhost:1337/api/products?populate=Image') // Ensure the API returns image data
      .then((response) => {
        const productData = response.data.data.map((product) => ({
          id: product.id,
          name: product.Name, // Ensure attribute names match your Strapi API
          description: product.Description,
          price: product.Price,
          imageUrl: product.Image?.url
            ? `http://localhost:1337${product.Image.url}` : '', // Extract image URL safely
        }));
        setProducts(productData);
      })
      .catch((error) => console.error('Error fetching products with images:', error));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
