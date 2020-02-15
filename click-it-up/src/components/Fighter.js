import React from "react";
import PropTypes from "prop-types";

class Fighter extends React.Component {
  render() {
    const { id, image, name } = this.props.fighter;
    return (
      <span>
        <img
          className="fighter"
          src={image}
          id={id}
          alt={name}
          style={charCard}
          onClick={this.props.onClick.bind(this, id)}
        />
      </span>
    );
  }
}

const charCard = {
  padding: "5px",
  cursor: "pointer",
  width: "400px",
  border: "solid"
};

Fighter.propTypes = {
  fighter: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Fighter;
