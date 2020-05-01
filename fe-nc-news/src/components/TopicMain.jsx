import React, { Component } from "react";

import * as api from "../utils/api";
import Loading from "./Loading";

class TopicMain extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <div id="topic_main">
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <div className="list_item" key={slug}>
              Topic: {slug} <br />
              Description: {description}
            </div>
          );
        })}
      </div>
    );
  }
}

export default TopicMain;
