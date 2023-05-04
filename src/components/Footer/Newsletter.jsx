import React, { useRef } from "react";
import SubHeading from "../SubHeading/SubHeading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import "./Newsletter.css";

const Newsletter = () => {
  function handleToast() {
    toast.success("message sent");
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r19vb7v",
        "template_g88mlt9",
        form.current,
        `pQZJU2rCBgHNU332c`
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message successfully sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message.");
        }
      );
  };
  return (
    <div className="app__contact padding__section" id="contact">
      <div className="app__contact-heading">
        <SubHeading title="Get in touch" />
        <h1 className="headtext__cormorant">Contact us</h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__contact-form_input"
        >
          <div className="app__contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="*your name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="*email address"
              required
            />
          </div>
          <div className="app__contact-form">
            <input
              type="text"
              name="user_subject"
              placeholder="*subject"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="*phone number"
              minlength="10"
              maxlength="14"
              required
            />
          </div>
          <div className="app__form-textarea">
            <textarea
              name="message"
              placeholder="*your message"
              spellCheck="true"
              required
            />
          </div>
          <button
            onClick={handleToast}
            type="submit"
            value="Send"
            className="custom__button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

{
  /* <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And Never Miss Latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your e-mail address" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div> */
}
