import React from "react";
import "./Intro.css";
import user_image from "../../assets/image.png";
import btnimg from "../../assets/hireme.png";
import { Link } from "react-scroll";
function Intro() {
  return (
    <section id="intro">
      <div className="intro">
        <div className="introContant">
          <span className="hello">Hello,</span>
          <span className="introname">
            I'm <span className="name">Sanket</span>
            <br />
            Website Designer
          </span>
          <p className="intropara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique,
            illo cum id perferendis dolor magni?
          </p>
          <Link>
            <button className="btn_hire">
              <img className="btn_img" src={btnimg} alt="" />
              Hire Me
            </button>
          </Link>
        </div>
      </div>
      <img src={user_image} alt=""  className="image_bg"/>
    </section>
  );
}

export default Intro;
