import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../cart/AddToCartButton';
import ResetLocation from "../../helpers/ResetLocation";

const MenuGridItem = ({ singleProduct, handleAddProduct, handleRemoveProduct }) => {

 

  return (
    <article className="menu-grid-item flex-container flex-column txt-white">
      <Link onClick={ResetLocation} to={`/menu/${singleProduct.id}`} className="menu-item-link">
        <img src={singleProduct.ItemImg} alt={`${singleProduct.ItemName}`} />
      </Link>
      <h3>{singleProduct.ItemName}</h3>
      <p>{singleProduct.ItemIngredients}</p>
      {singleProduct.attributes.length === 0 ? null :
        singleProduct.attributes?.map(attribute => (
          <Attribute
            key={attribute.id}
            className="attributes"
            handleSelectedAttributes={handleSelectedAttributes}
            attribute={attribute}
            targetAttribute={targetAttribute}
          />
        ))
      }
      <div className="price">
        {singleProduct.sale === true ?
          <section className="sale-pricing">
            <p className="price-num-before"><span>₦</span>{singleProduct.ItemPriceBefore}</p>
            <p className="price-num"><span>"₦</span>{singleProduct.ItemPrice}</p>
          </section>
          :
          <p className="price-num"><span>₦</span>{singleProduct.ItemPrice}</p>
        }
        <AddToCartButton
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          singleProduct={singleProduct}
        />
      </div>
    </article>
  );
};

export default MenuGridItem;
  
