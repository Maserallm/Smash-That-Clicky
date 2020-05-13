import React from "react";
import { Link } from "react-router-dom";
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
        <img className="header" src="./images/smashbros.png" />

        <Link
          className="title"
          href="https://www.smashbros.com/en_US/index.html"
        >
          <img
            src="https://fontmeme.com/permalink/200406/54cf4cc89e0161263aa403e241583cf5.png"
            alt="super-smash-bros-font"
            border="0"
          />
        </Link>

        {/* <a href="/"> */}
        {/* <img src="https://fontmeme.com/images/super-smash-bros-latest-logo-min.png" /> */}
        {/* <h1 style={headerStyle}>Smash That Clicky</h1> */}
        {/* </a> */}

        {/* <Link
          className="logo"
          href="https://www.smashbros.com/en_US/index.html"
        >
          <img
            src="./images/pngkey.com-smash-bros-logo-png-2256701.png"
            alt="Super Smash Bros Logo"
            width="10%"
            style={{ cursor: "pointer" }}
          />
        </Link> */}
      </section>
    );
  }
}

const headerStyle = {
  color: "black",
  textAlign: "center",
  padding: "10px",
  textDecoration: "underline",
  float: "left"
};

export default Navbar;
