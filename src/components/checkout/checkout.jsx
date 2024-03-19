import React, {useContext, useState } from "react";
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
// import StripeCheckout from "./stripe-checkout/stripe-checkout";
import ShippingAddress from "./custom-checkout/shipping-address";
import './checkout.styles.scss';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    const [shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    }

    return (
        <Layout>
        <div>
            <h2 className='checkout'>Checkout Summary</h2>
            <h3>{`Total Items: ${itemCount}`}</h3>
            <h4>{`Amount to Pay: ${total}`}</h4>
             
            <div style={addressShown}>
                <ShippingAddress  setShipping={setShipping} />
            </div>
        </div>
        </Layout>
    )
}

export default Checkout;