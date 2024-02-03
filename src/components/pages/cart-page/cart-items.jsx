import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";

// we going to build component
const CartItem = (product) => 
// we going to return some jsx 
{
// we going to desctructure some properties from product
// we need title, imageUrl, ....
const { title, imageUrl, proce, quantity } = product;


// we going to return some jsx
return (
    <div>
        <div>
            <img src={imageUrl} alt='product' />
        </div>
        <div className="name-price">
            <h4>{title}</h4>
            <p>${price}</p>
        </div>
        <div className="quantity">
            <p>Quantity: ${quantity}</p>
        </div>
        <div className="btns-container">
            <button>
                <PlusCircleIcon width='20px' />
            </button>
            {   // testing to show Trash button if there is some quantity
                quantity === 1 &&
                <button>
                    <TrashIcon width='20px' />
                </button>
            }
            { // another testing to show  Increase button if there is at least min 1 quantity
                quantity > 1 &&
                <button>
                    <MinusCircleIcon width='20px' />
                </button>
            }
        </div>
    </div>
);
}

export default CartItem;