import React from "react";
import './Client.css'
import WallMart from '../../assets/walmart.png'
import MicroSoft from '../../assets/microsoft.png'
import FaceBook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png'

function Client() {
  return (
    <section className="client">
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
    </section>
  );
}

export default Client;
