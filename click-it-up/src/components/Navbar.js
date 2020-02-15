import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-1">
        <a className="navbar-brand" href="/">
          <h1 style={headerStyle}>Smash That Clicky!</h1>
        </a>

        <a href="https://www.smashbros.com/en_US/index.html">
          <img
            src="./images/pngkey.com-smash-bros-logo-png-2256701.png"
            alt="Super Smash Bros Logo"
            width="10%"
            style={{ cursor: "pointer", float: "right" }}
          />
        </a>
      </nav>
    );
  }
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  textDecoration: "underline",
  float: "left"
};

export default Navbar;
