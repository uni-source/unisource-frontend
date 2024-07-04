import React from "react";
import Marquee from "react-fast-marquee";
import './techslider.css';

export const Tslider = () => {
    return (
      <div className="carousel">
        <div>
          <Marquee direction="left" speed={100} delay={0.2}>
            <div className="image_wrapper">
              <img src="./assets/technologies/node js logo.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/0_acB7EdIeWDFW0caX.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/angularjs-by-google1122.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/20211218162349.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/Mongodb-PNG-Free-Image.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/microsoft-sql-server4529.jpg" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/0663e880-8a02-11ea-9c75-44ca9a90cc1f.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/Flutter-logo.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src="./assets/technologies/typescript.png" alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    )
  }
  
  export default Tslider;
  
  