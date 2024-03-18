import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { 
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements
 } from "@stripe/react-stripe-js";
 import { fetchFromAPI } from "../../helpers"; 

 const CustomCheckout = () => {
    const  [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const elements = useElements();

    const cardHandleChange = event => {
        const { error } = event;
        setError(error ? error.message: '')
    }

    const cardStyle = {
        style: {
            base: {
              iconColor: '#c4f0ff',
              color: '#fff',
              fontWeight: '500',
              fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
              fontSize: '16px',
              fontSmoothing: 'antialiased',
              ':-webkit-autofill': {
                color: '#fce883',
              },
              '::placeholder': {
                color: '#87BBFD',
              },
            },
            invalid: {
              iconColor: '#FFC7EE',
              color: '#FFC7EE',
            }
          }
    }

    return (
        <div>
            <h4>Enter Payment  Details</h4>
            <div className="stripe-card">
                <CardNumberElement 
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="stripe-card">
                <CardExpiryElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="stripe-card">
                <CardCvcElement 
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}
                />
            </div>
            <div className="submit-btn">
                <button
                disabled={processing}
                className="buton is-black nomad-btn submit"
                onClick={ () => handleCheckout()}
                >
                    {
                        processing ? 'PROCESSING' : 'PAY'
                    }
                </button>
            </div>
            {
                error && (<p className="error-message">{error}</p>)
            }
        </div>
    )
 }

 export default CustomCheckout;