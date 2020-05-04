import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    voteDifference: 0,
  };

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    return (
      <div>
        <p>Votes</p>
        <button onClick={() => this.updateVotes(1)}>Like</button>
        <p>{votes + voteDifference}</p>
        <button onClick={() => this.updateVotes(-1)}>Dislike</button>
      </div>
    );
  }
  updateVotes = (voteChange) => {
    const { subject, id } = this.props;
    const { voteDifference } = this.state;

    this.setState({
      voteDifference: voteDifference + voteChange,
    });
    api.patchVotes(subject, id, voteChange).catch(() => {
      this.setState((currentState) => {
        return { voteDifference: currentState.voteDifference - voteChange };
      });
    });
  };
}

export default Votes;
