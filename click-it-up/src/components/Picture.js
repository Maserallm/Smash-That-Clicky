import React from "react";
import PropTypes from "prop-types";

class Picture extends React.Component {
  render() {
    const { id, image, name } = this.props.fighter;
    return (
      <span>
        <img
          className=""
          src={image}
          id={id}
          alt={name}
          style={charCard}
          //onClick={this.charClicked.bind(this, id)}
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

Picture.propTypes = {
  fighter: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Picture;
