import React from "react";
import "./About.css";
import lady1 from "../../assets/lady1.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">
          <h1> About Us, sit amet</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            sagittis dui. Nunc at convallis purus. Fusce orci metus, dictum et
            ex sit amet, tincidunt suscipit tellus. Vivamus sollicitudin
            fringilla lectus. In hac habitasse platea dictumst. Nam id molestie
            urna, pulvinar
          </span>
        </div>
        <div className="about__img">
          <div className="about__images">
            <img src={lady1} />
            <h3>habitasse</h3>
            <p>Vivamus sollicitudin</p>
            <p> Nam id molestie</p>
          </div>

          <div className="about__images">
            <img src={lady1} />
            <h3>habitasse</h3>
            <p>Vivamus sollicitudin</p>
            <p> Nam id molestie</p>
          </div>

          <div className="about__images">
            <img src={lady1} />
            <h3>habitasse</h3>
            <p>Vivamus sollicitudin</p>
            <p> Nam id molestie</p>
          </div>

          <div className="about__images">
            <img src={lady1} />
            <h3>habitasse</h3>
            <p>Vivamus sollicitudin</p>
            <p> Nam id molestie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
