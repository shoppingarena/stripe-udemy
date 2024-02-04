import React, { useContext } from "react";

import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";

import { CartContext } from "../../../context/cart-context";


// we going to build component
const CartItem = (product) => 
// we going to return some jsx 
{
// we going to desctructure some properties from product
// we need title, imageUrl, ....
const { title, imageUrl, price, quantity } = product;


const { increase, decrease } = useContext(CartContext);



// we going to return some jsx
return (
    <div className="cart-item">
        <div className="item-image">
            <img src={imageUrl} alt='product' />
        </div>
        <div className="name-price">
            <h4>{title}</h4>
            <p>${price}</p>
        </div>
        <div className="quantity">
            <p>Quantity: {quantity}</p>
        </div>
        <div className="btns-container">
            <button className="btn-increase" onClick={() => increase(product)} >
                <PlusCircleIcon width='20px' />
            </button>
            {   // testing to show Trash button if there is some quantity
                quantity === 1 &&
                <button className="btn-trash">
                    <TrashIcon width='20px' />
                </button>
            }
            { // another testing to show  Increase button if there is at least min 1 quantity
                quantity > 1 &&
                <button className="btn-decrease" onClick={() => decrease(product)} >
                    <MinusCircleIcon width='20px' />
                </button>
            }
        </div>
    </div>
);
}

export default CartItem;