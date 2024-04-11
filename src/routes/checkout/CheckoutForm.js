import React from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ totalPayment, productsQuantity }) => {
  const navigate = useNavigate();

  // Define an empty handleSubmit function for now
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
        <button type="submit" className="active-button-style">
          Proceed to payment
        </button>
      </form>
    </section>
  );
}

export default CheckoutForm;
