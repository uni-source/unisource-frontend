import React from "react";
import Marquee from "react-fast-marquee";
import './companyslider.css';

export const Cslider = () => {
  return (
    <div className="carousel">
      <div>
        <Marquee direction="left" speed={100} delay={0.2}>
          <div className="image_wrapper">
            <img src="./assets/images/one.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/two.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/three.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/four.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/five.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/six.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/seven.jpg" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/eight.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/nine.png" alt="" />
          </div>
          <div className="image_wrapper">
            <img src="./assets/images/ten.png" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Cslider;

