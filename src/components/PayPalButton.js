import React, { useEffect, useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const PayPalButton = () => {
  const { cart } = useCart();
  const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);
  const navigate = useNavigate();
  const paypalButtonRef = useRef(null);

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (!window.paypal) {
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=ARnrQYnYeJiRFcWFCj9HBfhMhbI4ErPlQg5NQE0QL1qS-eWvRxSJmc1ujmynxlwATxitVxssgbH-FHV3";
      script.async = true;
      script.onload = () => setIsPayPalLoaded(true);
      script.onerror = () => {
        console.error('Error loading PayPal script.');
      };
      document.body.appendChild(script);
    } else {
      setIsPayPalLoaded(true); // If PayPal is already loaded, just set the state
    }
  }, []);

  useEffect(() => {
    if (isPayPalLoaded && paypalButtonRef.current && window.paypal) {
      // Initialize the PayPal button only if it's not already rendered
      if (!paypalButtonRef.current.hasChildNodes()) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalPrice,
                },
              }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              // Clear cart after successful payment
              // Optionally, navigate to the confirmation page
              navigate('/confirmation', { state: { details, cart, totalPrice } });
            });
          },
          onError: (err) => {
            console.error('PayPal error: ', err);
            alert('There was an issue with your payment. Please try again.');
          },
        }).render(paypalButtonRef.current);
      }
    }
  }, [isPayPalLoaded, totalPrice, cart]); // Re-run effect only when PayPal is loaded, or the cart changes

  return (
    <div className="payPalLayout">
      <h3 className="payPalTitle">Review Your Order</h3>
      <div className="productList">
        {cart.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="productItem">
              <p>{item.name}</p>
              <p>{item.quantity} x ${item.price}</p>
            </div>
          ))
        )}
      </div>
      <div className="paymentDetails">
        <h4>Total: ${totalPrice}</h4>
        {/* PayPal button container */}
        <div ref={paypalButtonRef}></div>
      </div>
    </div>
  );
};

export default PayPalButton;
