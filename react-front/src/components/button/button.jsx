import React from "react";
import { Link } from 'react-router-dom';
import './button.styles.scss';

const Buton = () => {
    return (
        <Link to='/shop' className='button is-black' id='shop-now'>SHOP NOW</Link>
    );
}

export default Buton;