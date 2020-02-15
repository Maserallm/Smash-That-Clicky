import React from "react";

class Score extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center mb-3">
          <span className="score mx-1">Score: {this.props.score}</span> |
          <span className="top-score mx-1">
            Top Score: {this.props.topScore}
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Score;
