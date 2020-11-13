import React from "react";
import { NavLink } from "react-router-dom";
function contenthead() {
  return (
    <>
      <div className="container-fluid pt-4 tab-content1">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-7  ">
            <div className="content1 pt-3">
              <h3
                style={{ color: "#ffff", fontFamily: "sans-serif" }}
                className="content1 text-center"
              >
                Watch TV shows Movies any where anytime
                <br /> personalised view for you
              </h3>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-center align-items-center ">
            <button className="btn btn-danger bg-danger">
              <NavLink to="/Main" className="text-light text-decoration-none">
                Try Now
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default contenthead;
