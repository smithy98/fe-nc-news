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
      <section id="topic_main">
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <section className="list_item" key={slug}>
              <p>Topic: {slug}</p>
              <p>Description: {description}</p>
            </section>
          );
        })}
      </section>
    );
  }
}

export default TopicMain;
