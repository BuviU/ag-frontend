import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import PayPalButton from '../components/PayPalButton'; 

const CartPage = () => {
  const { cart, setCart, increaseQuantity, decreaseQuantity } = useCart();

  useEffect(() => {
    // This will sync cart state with localStorage on load
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]);

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">No items in your cart. Start shopping!</p>
      ) : (
        <div className="cart-layout">
          {/* Left Section: Product List */}
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${(product.price * product.quantity).toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-btn increase-btn"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <span className="quantity-display">{product.quantity}</span>
                    <button
                      className="quantity-btn decrease-btn"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                  </div>

                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Cart Summary */}
          <div className="cart-summary">
            <div className="summary-header">
              <h3>Order Summary</h3>
            </div>
            <hr />
            <div className="total-price-container">
              <p className="total-price">Total: ${totalPrice}</p>
            </div>

            {/* PayPal button rendered only once */}
            <div className="paypal-button-container">
              <PayPalButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
