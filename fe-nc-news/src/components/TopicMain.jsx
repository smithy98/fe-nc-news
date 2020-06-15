import React, { Component } from "react";
import { Link } from "@reach/router";
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
    const { updateTopic } = this.props;
    if (isLoading) return <Loading />;

    return (
      <section id="topic_main">
        <h2>Topics</h2>
        {topics.map(({ slug, description }) => {
          return (
            <Link to="/articles" key={slug} onClick={() => updateTopic(slug)}>
              <section className="topic_card">
                <p>Topic: {slug}</p>
                <p>Description: {description}</p>
              </section>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default TopicMain;
