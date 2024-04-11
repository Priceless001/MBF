import React from "react";
import { useState, useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { Link, useNavigate } from "react-router-dom";



  return (
    <section className="checkout-personal-information">
      <h3>Personal information <span><Link onClick={ResetLocation} to="/profile">Edit profile</Link></span></h3>
      
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
