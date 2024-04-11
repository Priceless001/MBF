import React from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ products, totalPayment, productsQuantity, taxes }) => {
  const navigate = useNavigate();

  const generateWhatsAppMessage = () => {
    // Construct the message with product details and total payment
    const message = `Hello! I'd like to make a payment for the following items: \n`;
    const productList = products.map(product => `${product.name}: ${product.quantity} x ${product.price}`).join('\n');
    const totalPrice = `Total: $${totalPayment}`;
    const formattedMessage = `${message}${productList}\n${totalPrice}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp message link
    const whatsappLink = `https://wa.me/08122390396?text=${encodedMessage}`;

    // Open the WhatsApp message link in a new window
    window.open(whatsappLink, '_blank');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to generate the WhatsApp message link
    generateWhatsAppMessage();
    // Reset location or perform any other necessary actions
    ResetLocation();
  }
  
  return (
    <section className="checkout-personal-information">
      <form onSubmit={handleSubmit}>
        <h3>Delivery details</h3>

        <article className="checkout-carttotals">
          {productsQuantity === 0 ? null : (
            <section className="cart-totals">
              <section className="totals-content">
                <h4 className="cart-totals-sum">Tax 10%:</h4>
                <p>$ {taxes}</p>
              </section>
              <section className="totals-content">
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p> {productsQuantity}</p>
              </section>
              <section className="totals-content" >
                <h4 className="cart-totals-sum">Total:</h4>
                <p>$ {totalPayment}</p>
              </section>
            </section>
          )}
        </article>
        <button type="submit" className="active-button-style">
          Proceed to payment
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
    
