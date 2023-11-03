import React from "react";
import logoIlab from "../assets/logo-ilab.png";
// import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    // <nav>
    //   <div className="container">
    //     <img src={logoIlab} alt="logo-ilab" />
    //     <div>
    //       <ul>
    //         <li className="nav-item">
    //           <button>
    //             <Link to="/">Home</Link>
    //           </button>
    //         </li>
    //         <li className="nav-item">
    //           <button>
    //             <Link to="/about">About Us</Link>
    //           </button>
    //         </li>
    //         <li className="nav-item">
    //           <button>
    //             <Link to="/contact">Contact</Link>
    //           </button>
    //         </li>
    //       </ul>

    //       <div className="row">
    //         <form>
    //           <button type="submit">SIGN UP</button>
    //         </form>
    //       </div>

    //       <div className="row">
    //         <form>
    //           <button type="submit">LOG IN</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <img src={logoIlab} alt="logo-ilab" width="100" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link active m-lg-"
                style={{ fontSize: "20px" }}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: "20px" }}
                href="/about"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: "20px" }}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="row">
            <div className="col">
              <form className="d-flex" role="search">
                <button className="btn btn-outline-dark m-lg-3" type="submit">
                  SIGN UP
                </button>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <form className="d-flex" role="search">
                <button className="btn btn-primary" type="submit">
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
