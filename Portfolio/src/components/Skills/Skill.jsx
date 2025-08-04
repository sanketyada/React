import React from "react";
import UIdesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";
import "./Skill.css"

function Skill() {
  return (
    <section className="skills">
      <span className="skilltitle">What I Do</span>
      <span className="skilldec">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At facere
        ipsum odit illo laudantium culpa nihil id quo fugiat asperiores.        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At facere
        ipsum odit illo laudantium culpa nihil id quo fugiat asperiores
      </span>
      <div className="skillbar">

        <div className="skillelement">
            <img src={UIdesign} alt="" />
            <div className="skillelementText">
                <h2>UI/UX Design</h2>
                <p>This is demo text,Write your own content here!</p>
            </div>
        </div>

        <div className="skillelement">
            <img src={webdesign} alt="" />
            <div className="skillelementText">
                <h2>Website Design</h2>
                <p>This is demo text,Write your own content here!</p>
            </div>
        </div>

        <div className="skillelement">
            <img src={Appdesign} alt="" />
            <div className="skillelementText">
                <h2>App Design</h2>
                <p>This is demo text,Write your own content here!</p>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Skill;
