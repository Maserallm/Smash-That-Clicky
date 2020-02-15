import React from "react";
import Picture from "./Picture";
import PropTypes from "prop-types";

const shuffleFighters = fighter => {};

class Images extends React.Component {
  render() {
    return this.props.fighters.map(fighter => (
      <Picture
        key={fighter.id}
        fighter={fighter}
        alt={fighter.name}
        onClick={this.props.charClicked}
      />
    ));
  }
}

Images.propTypes = {
  fighters: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Images;
