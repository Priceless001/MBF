import React from "react";

const AddToCartButton = ({ singleProduct, selectedAttributes, handleAddProduct, targetAttribute, setTargetAttribute }) => {
  return (
    <button
      onClick={() => {
        handleAddProduct(singleProduct, selectedAttributes);
        setTargetAttribute(true);
      }}
      className={`passive-button-style ${targetAttribute?.length > 0 || singleProduct?.attributes?.length === 0
        ? "active-add-to-cart"
        : "inactive-add-to-cart"
        }`}
      disabled={false} // Changed this line
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
