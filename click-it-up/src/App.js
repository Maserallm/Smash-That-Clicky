import React from "react";
import Fighters from "./components/Fighters";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Score from "./components/Score";

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    fighters: [
      {
        id: 1,
        name: "mario",
        image: "./images/mario.png",
        clicked: false
      },
      {
        id: 2,
        name: "luigi",
        image: "./images/luigi.png",
        clicked: false
      },
      {
        id: 3,
        name: "pikachu",
        image: "./images/pikachu.png",
        clicked: false
      },
      {
        id: 4,
        name: "samus",
        image: "./images/samus.png",
        clicked: false
      },
      {
        id: 5,
        name: "captain_falcon",
        image: "./images/captain_falcon.png",
        clicked: false
      },
      { id: 6, name: "fox", image: "./images/fox.png", clicked: false },
      {
        id: 7,
        name: "donkey_kong",
        image: "./images/donkey_kong.png",
        clicked: false
      },
      {
        id: 8,
        name: "bowser",
        image: "./images/bowser.png",
        clicked: false
      },
      {
        id: 9,
        name: "sheik",
        image: "./images/sheik.png",
        clicked: false
      },
      {
        id: 10,
        name: "link",
        image: "./images/link.png",
        clicked: false
      },
      {
        id: 11,
        name: "ganondorf",
        image: "./images/ganondorf.png",
        clicked: false
      },
      {
        id: 12,
        name: "wario",
        image: "./images/wario.png",
        clicked: false
      }
    ]
  };

  onClick = id => {
    this.setState({
      fighters: this.state.fighters.map(fighter => {
        if (fighter.id === id) {
          this.checkFighter(fighter);
        }
        return fighter;
      })
    });
  };

  checkFighter = fighter => {
    if (fighter.clicked === true) {
      alert("You have been DEFEATED");
      this.setState({
        fighters: this.state.fighters.map(fighter => {
          fighter.clicked = false;
          return fighter;
        })
      });
      this.resetScore();
      this.checkScore(this.state.score, this.state.topScore);
    } else {
      fighter.clicked = true;
      this.incrementScore();
    }
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  checkScore = (score, topScore) => {
    if (score > topScore) {
      this.setState({ topScore: score });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar topScore={this.state.topScore} />
        <Jumbotron />
        <Score score={this.state.score} topScore={this.state.topScore} />
        <Fighters fighters={this.state.fighters} onClick={this.onClick} />
      </React.Fragment>
    );
  }
}

export default App;
