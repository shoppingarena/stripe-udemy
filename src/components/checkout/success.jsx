import React, { useContext, useEffect} from "react";
import Layout from '../shared/layout';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from "react-router-dom";

const Success = () => {
    const { clearCart} = useContext(CartContext);
    /**
     * code before: useEffect(clearCart, []);
     * React Hook useEffect has a missing dependency: 'clearCart'.
     * Either include it or remove the dependency array  react-hooks/exhaustive-deps
     */
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    let navigate = useNavigate();
    const clickContinue = () => {navigate('/shop');}

    return (
        <Layout>
        <div className="checkout">
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