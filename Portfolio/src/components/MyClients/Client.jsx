import React from "react";
import "./Client.css";
import WallMart from "../../assets/walmart.png";
import MicroSoft from "../../assets/microsoft.png";
import FaceBook from "../../assets/facebook.png";
import Adobe from "../../assets/adobe.png";
import Facebook_icon from "../../assets/facebook-icon.png";
import Tweeter_icone from "../../assets/twitter.png";
import Youtube_icone from "../../assets/youtube.png";
import Instagram_icone from "../../assets/instagram.png";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Client() {
  const form =useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8blplvv', 'template_bgwjwn8', form.current, {
        publicKey: 'aVAj7LjvESyZtrZ42',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Sent")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="ContactPage">
      <div id="client">
        <h2 className="clientHead">My Clients</h2>
        <p className="clientPara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nisi
          illum tempora rerum vero sequi consequuntur consectetur facilis atque
          numquam.
        </p>
        <div className="clientImg">
          <img src={WallMart} alt="" className="eachImage" />
          <img src={MicroSoft} alt="" className="eachImage" />
          <img src={FaceBook} alt="" className="eachImage" />
          <img src={Adobe} alt="" className="eachImage" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactHead">Contact Me</h1>
        <span className="contenttdecs">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactform">
          <input required type="text" className="name" placeholder="Your Name" name="from_name" />
          <input required type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Massage"
            id=""
          ></textarea>
          <button type="submit" value="send" className="submit">
            Submit
          </button>
          <div className="links">
            <img src={Facebook_icon} alt="" className="link" />
            <img src={Tweeter_icone} alt="" className="link" />
            <img src={Instagram_icone} alt="" className="link" />
            <img src={Youtube_icone} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Client;
