import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

class ArticlesMain extends Component {
  state = {
    articles: [],
    topic: undefined,
    sortBy: undefined,
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevprops, prevstate) {
    if (
      prevstate.topic !== this.state.topic ||
      prevstate.sortBy !== this.state.sortBy
    ) {
      console.log("updating");
      this.fetchArticles();
    }
  }

  render() {
    const { articles, topic, sortBy, isLoading } = this.state;
    if (isLoading) return <Loading />;

    return (
      <main>
        <h2>Articles</h2>
        <form>
          <label>
            Filter by Topics:
            <select
              id="article_topic_dropbox"
              value={topic}
              onChange={this.handleTopics}
            >
              <option value="">All</option>
              <option value="coding">Coding</option>
              <option value="football">Football</option>
              <option value="cooking">Cooking</option>
            </select>
          </label>
          <label>
            Sort By:
            <select
              id="article_topic_dropbox"
              value={sortBy}
              onChange={this.handleSortBy}
            >
              <option value="">Date created</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
          </label>
        </form>
        {articles.map((article) => {
          const { article_id } = article;
          return <ArticleCard article={article} key={article_id} />;
        })}
      </main>
    );
  }

  fetchArticles = () => {
    api.getArticles(this.state).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleTopics = (event) => {
    let topic = event.target.value;
    if (topic.length === 0) {
      topic = undefined;
    }
    this.setState({ topic: topic });
  };

  handleSortBy = (event) => {
    let sortBy = event.target.value;
    if (sortBy.length === 0) {
      sortBy = undefined;
    }
    this.setState({ sortBy: sortBy });
  };
}

export default ArticlesMain;
