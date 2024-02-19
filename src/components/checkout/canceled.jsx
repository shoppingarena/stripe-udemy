import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../shared/layout";

const Canceled = () => {
    let navigate = useNavigate();
    const clickContinue = () => {navigate('/shop');}

    return (
        <Layout>
            <div>
                <h1>Payment failed</h1>
                <p>Payment was not successfull</p>
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