import React from 'react';
import { useLocation } from 'react-router-dom';


const ConfirmationPage = () => {
  const { state } = useLocation();
  const { details, cart, totalPrice } = state || {};

  return (
    <div className="confirmationPage">
      <div className="confirmationHeader">
        <h1>Payment Successful!</h1>
        <p>Thank you for your order. Here are your details:</p>
      </div>

      <div className="confirmationContent">
        <div className="billingInfo">
          <h3>Billing Information</h3>
          <div className="infoCard">
            <p><strong>Name:</strong> {details?.payer?.name?.given_name}</p>
            <p><strong>Email:</strong> {details?.payer?.email_address}</p>
          </div>
        </div>

        <div className="orderSummary">
          <h3>Order Summary</h3>
          <ul className="orderList">
            {cart.map((item) => (
              <li key={item.id} className="orderItem">
                <span>{item.name}</span> <span>{item.quantity} x ${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="orderTotal">
            <h4>Total: <span>${totalPrice}</span></h4>
          </div>
        </div>
      </div>

      <div className="thankYouMessage">
        <p>If you have any questions or need further assistance, feel free to contact us.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
