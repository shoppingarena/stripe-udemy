import React, { useContext, useEffect} from "react";
import Layout from '../shared/layout';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from "react-router-dom";

const Success = () => {
    const { clearCart} = useContext(CartContext);
    useEffect(clearCart, []);
    let navigate = useNavigate();
    const clickContinue = () => {navigate('/shop');}

    return (
        <Layout>
        <div>
            <h1>Thank you for your order</h1>
            <p>WE are currently processing your order and will send you a confirmation email shortly.</p>
            <div>
                <button className="button is-black nomad-btn submit"
                onClick={clickContinue}>
                    Continue Shopping
                </button>
            </div>
        </div>
        </Layout>
    );
}

export default Success;