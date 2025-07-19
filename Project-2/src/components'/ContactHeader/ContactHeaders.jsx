import React from "react";

import styles from './ContactHeader.module.css'
function ContactHeaders() {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        facilis nisi nam, distinctio laborum id illum aperiam autem ratione.
        Placeat.
      </p>
    </div>
  );
}

export default ContactHeaders;
