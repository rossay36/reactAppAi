import React from "react";
import "./Footer.css";
import aiLogo from "../../assets/aiLogo.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-title">
            <h3>Neque porro quisquam</h3>
            <div className="footer__top-p">
              <p>Neque</p>
              <p>porroe</p>
              <p>quisquam lorm ipsum</p>
            </div>
          </div>
          <div className="footer__top-button">
            <button>Sign up free</button>
            <button>Contact sales</button>
          </div>
        </div>

        <div className="footer__center">
          <div className="footer__center-logo">
            <img src={aiLogo} alt="" />
            <p>Lorem</p>
          </div>

          <div className="footer__center-group">
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
            <div className="footer__center-content">
              <h2>quisquam</h2>
              <p>Lorem ipsum</p>
              <p>Lorem ip</p>
              <p>ipsum</p>
              <p>ipsum Lorem</p>
              <p>quisq lor</p>
            </div>
          </div>
        </div>

        <div className="div" />

        <div className="footer__bottom">
          <div className="footer__bottom-p">
            <p>@2020 </p>
            <p>Terms </p>
            <p>Policy </p>
          </div>
          <div className="footer__bottom-button">
            <p>ALL SYSTEM OPERATIONAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
