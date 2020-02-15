import React from "react";
//import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <a className="navbar-brand" href="/">
        <h1 style={headerStyle}>Smash That Clicky!</h1>
      </a>
      <span className="navbar-text">
        {/* <h3 score={this.props.score} topScore={this.props.topScore}> */}
        Score
      </span>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Clicky <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  textDecoration: "underline"
};

export default Navbar;
