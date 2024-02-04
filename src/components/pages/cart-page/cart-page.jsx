import React, { useContext } from "react";
import { CartContext } from '../../../context/cart-context';
import Layout from '../../shared/layout';
import CartItem from "./cart-item";
import Total from "./total";
import "../cart-page/cart-page.styles.scss";

const CartPage = () => {
    const { cartItems, itemCount, total,} = useContext(CartContext);
    
    return (
        <Layout>
            <div className="cart-page">
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className="empty-car">Your  Cart is empty</div>
                    :
                    <>
                        <div>
                            <div className="cart-item-container">
                                {
                                    cartItems.map(item => <CartItem { ...item} key={item.id} />)
                                }
                            </div>
                        </div>
                        <Total itemCount={itemCount} total={total} />
                    </>
                }
            </div>
        </Layout>
    );
}

export default CartPage;


