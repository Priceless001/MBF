import React, { useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutForm = ({ totalPayment, productsQuantity, cartItems }) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const handleProceedToPayment = () => {
    // Construct the message for the WhatsApp link
    const itemsList = cartItems.map(item => `${item.ItemName} - ${item.quantity} x ${item.ItemPrice}`).join('%0A');
    const totalPrice = `Total: ₦${totalPayment}`;
    const message = `Hello! I'd like to make a purchase of the following items:\n${itemsList}\n${totalPrice}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp message link with recipient phone number and message
    const whatsappLink = `https://wa.me/+2347067903294?text=${encodedMessage}`;
    
    // Open the WhatsApp link in a new window
    window.open(whatsappLink, '_blank');

    // Reset location or perform any other necessary actions
    ResetLocation();
  };

  return (
    <section className="checkout-personal-information">
      <form>
        <h3>Delivery details</h3>

        <article className="checkout-carttotals">
          {productsQuantity === 0 ? null : (
            <section className="cart-totals">
              <section className="totals-content">
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p>{productsQuantity}</p>
              </section>
              <section className="totals-content">
                <h4 className="cart-totals-sum">Total:</h4>
                <p>₦ {totalPayment}</p>
              </section>
            </section>
          )}
        </article>
        {/* Call handleProceedToPayment when button is clicked */}
        <button type="button" className="active-button-style" onClick={handleProceedToPayment}>
          Proceed to payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
