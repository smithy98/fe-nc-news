import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

class ArticlesMain extends Component {
  state = {
    articles: [],
    sortBy: undefined,
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillUnmount() {
    this.props.updateTopic(undefined);
  }

  componentDidUpdate(prevprops, prevstate) {
    if (
      prevprops.topic !== this.props.topic ||
      prevstate.sortBy !== this.state.sortBy
    ) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, sortBy, isLoading } = this.state;
    const { topic } = this.props;

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
              onChange={this.handleTopic}
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
              id="article_sortBy_dropbox"
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
    const { sortBy } = this.state;
    const { topic } = this.props;
    api.getArticles(sortBy, topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleTopic = (event) => {
    let topic = event.target.value;
    if (topic.length === 0) {
      topic = undefined;
    }
    this.props.updateTopic(topic);
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
