import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    voteDifference: 0,
    voted: false,
  };

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    return (
      <section>
        <p>Votes</p>
        <button onClick={() => this.updateVotes(1)}>Like</button>
        <p>{votes + voteDifference}</p>
        <button onClick={() => this.updateVotes(-1)}>Dislike</button>
      </section>
    );
  }
  updateVotes = (voteChange) => {
    const { subject, id } = this.props;
    const { voteDifference, voted } = this.state;

    if (!voted) {
      this.setState({
        voteDifference: voteDifference + voteChange,
        voted: true,
      });
      api.patchVotes(subject, id, voteChange).catch(() => {
        this.setState((currentState) => {
          return { voteDifference: currentState.voteDifference - voteChange };
        });
      });
    }
  };
}

export default Votes;
