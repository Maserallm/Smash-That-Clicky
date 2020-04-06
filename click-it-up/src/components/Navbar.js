import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <section
        // style={{
        //   backgroundImage: "url(./images/smashbros.png)",
        //   display: "flex"
        // }}
        className="top"
      >
        <img src="./images/smashbros.png" />
        <a className="title" href="/">
          <h1 style={headerStyle}>Smash That Clicky</h1>
        </a>

        <a href="https://www.smashbros.com/en_US/index.html">
          <img
            src="./images/pngkey.com-smash-bros-logo-png-2256701.png"
            alt="Super Smash Bros Logo"
            width="10%"
            style={{ cursor: "pointer", float: "right" }}
          />
        </a>
      </section>
    );
  }
}

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  textDecoration: "underline",
  float: "left"
};

export default Navbar;
