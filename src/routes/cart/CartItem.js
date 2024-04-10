import React from "react";
//components
import ChangeItemQuantity from "./ChangeItemQuantity";

const CartItem = ({
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
  cartItems,
  cartTotals,
  selectedSizeId // Assuming selectedSizeId is passed as a prop
}) => {
  return (
    <React.Fragment>
      {cartItems.map((cartItem, index) => {
        // Find the selected size option
        const selectedSizeOption = cartItem.attributes[0].attributeOptions.find(option => option.id === selectedSizeId);

        // Assuming selectedSizeOption is defined
        const price = parseFloat(cartItem.ItemPrice) * parseFloat(selectedSizeOption.value);

        return (
          <section className="cart-item" key={index}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <section className="cart-item-content">
              <section className="cart-item-info">
                {cartItem.userSelectedAttributes.length === 0 ? (
                  <h3 className="cart-item-title">{cartItem.ItemName}</h3>
                ) : (
                  <h3 className="cart-item-title">
                    {cartItem.ItemName},{" "}
                    {cartItem.userSelectedAttributes.map((i, index) => {
                      return <span key={index}>{i.attributeValue}</span>;
                    })}
                  </h3>
                )}
                <p className="cart-item-ingredients">{cartItem.ItemIngredients}</p>
              </section>

              <section className="cart-item-interaction">
                <ChangeItemQuantity
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  cartItem={cartItem}
                />

                {/* Display the dynamically calculated price */}
                <p className="cart-item-price">₦{price.toFixed(2)}</p>
              </section>
            </section>
          </section>
        );
      })}
      <button onClick={clearCart} className="cart-clear-btn">
        remove all items from the cart
      </button>
      {cartTotals}
    </React.Fragment>
  );
}

export default CartItem;
          
