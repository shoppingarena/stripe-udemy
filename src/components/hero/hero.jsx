import React from "react";
import './hero.styles.scss';
import Buton from "../button/button";

const Hero = () => {
    return (
        <section className='hero is-large is-info center'>
  <div className='hero-body'>
    <p className='title title-hero'>
      Large hero
    </p>
    <p className='subtitle'>
      Large subtitle
      
    </p>
    <p className="p-center">
        <Buton />
    </p>
  </div>
</section>
    );
}

export default Hero;