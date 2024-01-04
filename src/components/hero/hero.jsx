import React from "react";
import './hero.styles.scss';
import Buton from "../button/button";

const Hero = () => {
    return (
        <section className='hero is-large is-info'>
  <div className='hero-body'>
    <p className='title'>
      Large hero
    </p>
    <p className='subtitle'>
      Large subtitle
    </p>
    <Buton />
  </div>
</section>
    );
}

export default Hero;