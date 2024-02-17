import React, { useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from "../../../context/cart-context";
import { fetchFromAPI } from "../../helpers";

const StripeCheckout = () => {
    const [email, setEmail] = useState('');
    const { cartItems } = useContext(CartContext);

    //define handler
    const handleGuestCheckout = () => {}

    return (
        <form onSubmit={handleGuestCheckout}>
            <div>
                <input type='email' onChange={e => setEmail(e.target.value)}
                    placeholder='Email'
                    value={email}
                    className='nomad-input'
                />
            </div>
            <div className="submit-btn">
            <button type='submit' className="button is-black nomad-btn submit">
                Checkout
            </button>

            </div>
        </form>
    );
}

export default StripeCheckout;