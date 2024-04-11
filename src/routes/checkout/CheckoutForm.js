import React from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link } from "react-router-dom";

const CheckoutForm = ({ totalPayment, productsQuantity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add functionality here later
  }

  return (
    <section className="checkout-personal-information">
      <form onSubmit={handleSubmit}>
        <h3>Delivery details</h3>

        <article className="checkout-carttotals">
          {productsQuantity === 0 ? null : (
            <section className="cart-totals">
              <section className="totals-content">
                <h4 className="cart-totals-sum">Quantity:</h4>
                <p> {productsQuantity}</p>
              </section>
              <section className="totals-content" >
                <h4 className="cart-totals-sum">Total:</h4>
                <p>₦ {totalPayment}</p>
              </section>
            </section>
          )}
        </article>
        {/* Construct the WhatsApp message link */}
        <Link to={`https://wa.me/08122390396?text=Hello,%20I'm%20interested%20in%20making%20a%20purchase.%20My%20total%20payment%20is%20₦${totalPayment}.`} onClick={ResetLocation}>
          <button type="submit" className="active-button-style">
            Proceed to payment
          </button>
        </Link>
      </form>
    </section>
  );
}

export default CheckoutForm;
