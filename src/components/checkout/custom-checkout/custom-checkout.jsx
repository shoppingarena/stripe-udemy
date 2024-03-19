import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { 
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements
 } from "@stripe/react-stripe-js";
 import { fetchFromAPI } from "../../helpers"; 

 const CustomCheckout = ({ shipping, cartItems }) => {
    const navigate = useNavigate();
    const  [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
        const items = cartItems.map(item => ({price: item.price, quantity: item.quantity}));
        if (shipping) {
               const body = {
                cartItems: items,
                shipping: {
                    name: shipping.name,
                    address: {
                        line1: shipping.address
                    }
                },
                description: 'payment intent for nomad shop',
                receipt_email: shipping.email,
               }
               
               const CustomCheckout = async () => {
                const { clientSecret } = await fetchFromAPI('create-payment-intent', {
                    body
                });

                setClientSecret(clientSecret)
               }

               CustomCheckout();
        }
    }, [shipping, cartItems]);

    const handleCheckout = async () => {
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        });

        if (payload.error) {
            setError(`Payment Failed: ${payload.error.message}`);
        } else {
            navigate('/success');
        }
    }

    const cardHandleChange = event => {
        const { error } = event;
        setError(error ? error.message: '')
    }

    const cardStyle = {
        style: {
            base: {
              iconColor: '#c4f0ff',
              color: '#000',
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