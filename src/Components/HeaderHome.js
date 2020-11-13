import React from "react";
import "./Maincss/maincss.css";
import logo from "../svg/logo.svg";
import { NavLink } from "react-router-dom";

import "..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";

function HeaderHome() {
  return (
    <>
      <section className="headerComponent">
        <div className="container-fluid ">
          <div className="row">
            <nav className="navbar headerNav fixed-top d-flex justify-content-space">
              <NavLink className="navbar-brand " href="#" to="/Main">
                <img
                  src={logo}
                  width="70"
                  height="40"
                  className="d-inline-block align-top "
                  alt="logo"
                />
              </NavLink>
              <button className="btn btn-danger text-light">Signin</button>
            </nav>
          </div>

          <div className="header-content">
            <h2>Watch Your Interest</h2>
            <h3>Watch Animes free</h3>

            <button className="offer">
              <NavLink to="/Main" className="text-light text-decoration-none">
                Try Now
              </NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderHome;
