import React from "react";
import "./Work.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

function Works() {
  return (
    <section id="work">
      <h2 className="workhead">My Portfolio</h2>
      <p className="workdecs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat
        nesciunt corrupti aspernatur Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae voluptate minus rerum voluptas officia
        laborum quo obcaecati, illo maiores saepe? aliquid, repellat odio. Vero
        error quo veritatis?
      </p>
      <div className="workimgages">
        <img src={Portfolio1} alt="" className="workImg" />
        <img src={Portfolio2} alt="" className="workImg" />
        <img src={Portfolio3} alt="" className="workImg" />
        <img src={Portfolio4} alt="" className="workImg" />
        <img src={Portfolio5} alt="" className="workImg" />
        <img src={Portfolio6} alt="" className="workImg" />
      </div>
      <button className="seemore">See More</button>
    </section>
  );
}

export default Works;
