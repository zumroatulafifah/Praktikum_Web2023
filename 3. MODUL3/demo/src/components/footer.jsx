import React from "react";
import logoIlab from "../assets/logo-ilab.png";
import logoFacebook from "../assets/logo-facebook.png";
import logoTwitter from "../assets/logo-twitter.png";
import logoInstagram from "../assets/logo-instagram.png";

export default function FooterComponent() {
  const footerStyle = {
    margin: "19px;",
    marginRight: "15px",
    marginLeft: "15px",
    // Tambahkan properti gaya sesuai kebutuhan Anda
  };

  const copyrightStyle = {
    marginLeft: "2rem",
    marginTop: "5rem",
    fontSize: "10px",
  };

  const serviceHeadingStyle = {
    opacity: "25%",
  };

  const followUsStyle = {
    opacity: "25%",
  };

  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
        <div className="col mb-3">
          <a
            href=""
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img src={logoIlab} alt="logo-ilab" style={footerStyle} />
          </a>
          <p className="copyrightstyle">Copyright @2023 Zumro'atul Afifah</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5 className="mb-3" style={serviceHeadingStyle}>
            Service
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Email Marketing
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Campaigns
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Branding
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Offline
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="mb-3" style={serviceHeadingStyle}>
            About
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Our Story
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Benefits
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Team
              </a>
            </li>
            <li className="nav-item mb-3">
              <a href="#" className="nav-link p-0 text-body-secondary fw-bold">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 style={followUsStyle}>Follow Us!</h5>
          <div className="row">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <img
                  src={logoFacebook}
                  alt="logo-facebook"
                  width="16"
                  style={footerStyle}
                />
                Facebook
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fw-semibold"
                ></a>
              </li>
              <li className="nav-item mb-2">
                <img
                  src={logoTwitter}
                  alt="logo-twitter"
                  width="23"
                  style={footerStyle}
                />
                Twitter
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fw-semibold"
                ></a>
              </li>
              <li className="nav-item mb-2">
                <img
                  src={logoInstagram}
                  alt="logo-instagram"
                  width="23"
                  style={footerStyle}
                />
                Instagram
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fw-semibold"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
