import React from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link } from "react-router-dom";

const CheckoutForm = ({ totalPayment, productsQuantity, cartItem }) => {
  const handleProceedToPayment = () => {
    // Construct the WhatsApp message link with recipient phone number
    const message = `Hello! I'd like to make a purchase of the following items:\n`;
    const itemsList = cartItem.map(item => `${CartItem.Itemname}: ${CartItem.ItemQuantity} x ${CartItem.ItemPrice}`).join('\n');
    const totalPrice = `Total: ₦${totalPayment}`;
    const formattedMessage = `${message}${itemsList}\n${totalPrice}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappLink = `https://wa.me/08122390396?text=${encodedMessage}`;
    
    // Open the WhatsApp link in a new window
    window.open(whatsappLink, '_blank');

    // Reset location or perform any other necessary actions
    ResetLocation();
  }

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
}

export default CheckoutForm;
