import React from "react";
import { NavLink } from "react-router-dom";
import "..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Maincss/TabsNav.css";
import img1 from "../images/tab-tv.png";
import img2 from "../images/tab-tablet.png";
import img3 from "../images/tab-macbook.png";
import Contenthead from "./Contenthead";

function Tabcontent2() {
  return (
    <>
      <Contenthead />

      <div className="container-fluid tab-content1">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center pt-4 flex-column">
            <img src={img1} className="img-fluid" />
            <h3 className="content1" style={{ color: "#ffff" }}>
              Watch On your TV
            </h3>
            <p
              style={{ fontSize: "0.8rem", color: "#fff", fontFamily: "serif" }}
            >
              SmartTv, PlayBox,Xbox, AndroidTv
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center pt-4 flex-column">
            <img src={img3} className="img-fluid" />
            <h3 className="content1" style={{ color: "#ffff" }}>
              Watch On your macbook
            </h3>
            <p
              style={{ fontSize: "0.8rem", color: "#fff", fontFamily: "serif" }}
            >
              SmartTv, PlayBox,Xbox, AndroidTv
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center pt-4 flex-column">
            <img src={img2} className="img-fluid" />
            <h3 className="content1" style={{ color: "#ffff" }}>
              Watch On your MobilePhone
            </h3>
            <p
              style={{ fontSize: "0.8rem", color: "#fff", fontFamily: "serif" }}
            >
              SmartTv, PlayBox,Xbox, AndroidTv
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabcontent2;
