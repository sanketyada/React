import React from "react";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          possimus odit deleniti laboriosam officiis rem ipsam voluptates fugit,
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shoping">
          <p>Available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
}

export default Hero;
