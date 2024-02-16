import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
//import dotenv from 'dotenv';
//require('dotenv').config();


// Load environment variables from .env file
 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
            
        
    
    </StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
