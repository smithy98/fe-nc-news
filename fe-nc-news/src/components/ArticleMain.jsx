import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

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

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ topic: value });
  };
}

export default ArticlesMain;
