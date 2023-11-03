import React from "react";
// import Hero from "../assets/hero.jpg";
import "./style.css";

// const heroStyle = {
//   backgroundImage: `url(${Hero})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "flex-start", // Mengatur teks agar berada di sisi kiri
//   color: "#fff",
//   fontSize: "20px",
//   paddingLeft: "8rem",
//   marginLeft: "0rem",
//   marginTop: "1rem",
// };

export default function HeroComponent() {
  return (
    <>
      {/* <div className="hero">
        <img src={Hero} alt="ini-hero" />
        <div className="card-text">
          <h1>Selamat Datang</h1>
          <p>di Website Praktikum Pemrograman Web</p>
        </div>
      </div> */}

      <div className="hero">
        {/* <img src={Hero} alt="ini-hero" /> */}
        <h1>Selamat Datang</h1>
        <p>di Website Praktikum Pemrograman Web</p>
      </div>
    </>
  );
}
