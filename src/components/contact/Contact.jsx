import React from "react";
import "./Contact.css";
import cyber from "../../assets/cyber.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact us</h1>
      </div>
      <div className="contact__container">
        <form>
          <div className="contact__first">
            <input type="name" placeholder="First Name" />
            <input type="name" placeholder="Last Name" />
          </div>

          <div className="contact__second">
            <input type="email" placeholder="enter Your email" />
            <input type="text" placeholder="Phone number" />
          </div>

          <div className="selection">
            <h3>what is the property being sold</h3>
            <select name="contact">
              <option value="commercial">None! select one option</option>
              <option value="commercial">commercial</option>
              <option value="private">private</option>
              <option value="company">company</option>
            </select>
          </div>

          <div className="selection">
            <p>In Contact*</p>
            <h3>have you sign an agreement with buyer?*</h3>
            <select name="contact">
              <option value="commercial">None! select one option</option>
              <option value="commercial">Yes</option>
              <option value="commercial">No</option>
            </select>
          </div>

          <div className="selection">
            <h3>how did you identify yourself?*</h3>
            <select name="contact">
              <option value="commercial">none select one option</option>
              <option value="commercial">
                International real estate investor
              </option>
              <option value="private">Local real estate investor</option>
              <option value="company">private</option>
            </select>
          </div>

          <textarea placeholder="How may we help you" />
        </form>
        <div className="contact__img">
          <img src={cyber} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
