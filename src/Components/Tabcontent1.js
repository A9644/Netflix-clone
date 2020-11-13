import React from "react";
import Img1 from "../images/tab-1-pic.png";
import "..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";

function Tabcontent1() {
  return (
    <div className="container-fluid p-0 tab-content1 pt-3">
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center ">
          <div className="content1 d-flex justify-content-center align-items-center flex-column">
            <h3 style={{ color: "#ffff" }} className="content1">
              If you think Netflix is not for you
              <br />
              Cancel online at any Time
            </h3>
            <button className="commitbtn">Click here</button>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={Img1} className="img-fluid tab-1-pic" />
        </div>
      </div>
    </div>
  );
}

export default Tabcontent1;
