import React from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link } from "react-router-dom";

const CheckoutForm = ({ totalPayment, productsQuantity }) => {
  const handleProceedToPayment = () => {
    // Construct the WhatsApp message link with recipient phone number
    const whatsappLink = `https://wa.me/07067903294?text=Hello,%20I'm%20interested%20in%20making%20a%20purchase%20.%20My%20total%20payment%20is%20₦${totalPayment}.`;
    
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
