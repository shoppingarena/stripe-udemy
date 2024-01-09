import React from "react";
import { useNavigate } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

const MainSection = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/product/1');
    }

    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={studioBag} alt='studio bag' />
                </div>
                <div className="ms-m-description">
                    <h2>Design for fashion. Crafted for sport.</h2>
                    <p>We make products that effortlessly transition from day to night...</p>
                    <button className="buton is-bulma" id='shop-now' onClick={handleClick}>
                        STUDIO BAG
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainSection;