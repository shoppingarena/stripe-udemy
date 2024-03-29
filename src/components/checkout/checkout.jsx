import React, {useContext } from "react";
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import StripeCheckout from "./stripe-checkout/stripe-checkout";
import './checkout.styles.scss';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);

    return (
        <Layout>
        <div>
            <h2 className='checkout'>Checkout Summary</h2>
            <h3>{`Total Items: ${itemCount}`}</h3>
            <h4>{`Amount to Pay: ${total}`}</h4>
            <StripeCheckout />
        </div>
        </Layout>
    )
}

export default Checkout;