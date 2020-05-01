import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";

class ArticlesMain extends Component {
  state = {
    articles: [],
    topic: undefined,
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.topic !== this.state.topic) {
      console.log("updating");
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    api.getArticles(this.state).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ topic: value });
  };

  render() {
    const { articles, topic, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <main>
        <h2>Articles</h2>
        <form>
          <label>
            Topics:
            <select
              id="article_topic_dropbox"
              value={topic}
              onChange={this.handleChange}
            >
              <option value={undefined}>All</option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
              <option value="cooking">Cooking</option>
            </select>
          </label>
        </form>
        {articles.map(({ article_id, title, author, topic, created_at }) => {
          return (
            <div className="list_item" key={article_id}>
              Title: {title} <br />
              Author: {author} <br />
              Topic: {topic} <br />
              Posted: {created_at}
            </div>
          );
        })}
      </main>
    );
  }
}

export default ArticlesMain;
