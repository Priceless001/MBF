import React, { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ productsQuantity, taxes, totalPayment }) => {
  // Define your state variables and functions here

  return (
    <section className="checkout-personal-information">
      <form>
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
    
