import React from "react";
import Fighter from "./Fighter";
import PropTypes from "prop-types";
import "./fighter.css";

const shuffleChar = char => {
  let i = char.length - 1;
  for (; i > 0; i--) {
    const f = Math.floor(Math.random() * (i + 1));
    const temp = char[i];
    char[i] = char[f];
    char[f] = temp;
  }
  return char;
};

class Fighters extends React.Component {
  render() {
    const shuffleFighters = shuffleChar(this.props.fighters);
    return (
      <div className="fighter-box">
        {shuffleFighters.map(fighter => (
          <Fighter
            key={fighter.id}
            fighter={fighter}
            alt={fighter.name}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}

Fighters.propTypes = {
  fighters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Fighters;
