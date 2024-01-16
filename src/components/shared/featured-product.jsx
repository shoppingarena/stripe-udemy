import React from "react";
import './featured-product.style.scss';

const FeaturedProduct = (product) => {
    const { title, imageUrl, price, id } = product;

    return (
        <div className="featured-product" key={id}>
            <div className="featured-image">
                <img src={imageUrl} alt='product' />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>{price}</p>
                <button className="button is-black nomad-btn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default FeaturedProduct;