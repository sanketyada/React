import React, { useState } from "react";
import "./Herosection.css";
import Button from "../Button/Button";

import { RiResetLeftFill } from "react-icons/ri";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Herosection() {
  let [data, setData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const handleForm = (event) => {
    event.preventDefault();
    setData({
      ...data,
      name: event.target[0].value,
      email: event.target[1].value,
      review: event.target[2].value,
    });
  };
  const onReset = (event) => {
    event.preventDefault();
    setData({
      ...data,
      name: "",
      email: "",
      review: "",
    });
  };
  const onSubmit = () => {
    console.log("Submit Button");
  };
  return (
    <div>
      <div className="formdata">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          consequatur delectus sed voluptatem sit assumenda eum perspiciatis
          ipsum molestias.
        </p>
        <form action="" onSubmit={handleForm}>
          <div className="inputField">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"  />
          </div>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input type="text" id="email"  />
          </div>
          <div className="inputField">
            <label htmlFor="feedback">Feedback</label>
            <input type="text" id="feedback"   />
          </div>
          <div className="btn">
            <Button onClick={onReset} text="RESET" icon={<RiResetLeftFill />} />
            <Button onClick={onSubmit} text="Submit" icon={<CiSaveUp2 />} />
          </div>
          <Button
            isOutine={true}
            text="Email"
            icon={<MdOutlineAlternateEmail />}
          />
        </form>
      </div>

      <div>
        <h1>Name: {data.name}</h1>
        <h1>Email: {data.email}</h1>
        <p>Comment:{data.review}</p>
      </div>
    </div>
  );
}

export default Herosection;
