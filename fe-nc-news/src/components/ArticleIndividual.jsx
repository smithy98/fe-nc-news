import React, { Component } from "react";
import Loading from "./Loading";
import * as api from "../utils/api";
import Votes from "./Votes";
import ArticleComments from "./ArticleComments";

class ArticleIndividual extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  render() {
    const { article, isLoading } = this.state;
    const { user } = this.props;
    if (isLoading) return <Loading />;
    return (
      <main>
        <h2>{article.title}</h2>
        <h3>{article.created_at}</h3>
        <h3>Written By: {article.author}</h3>
        <p className="article_body">{article.body}</p>
        <Votes
          votes={article.votes}
          subject="articles"
          id={article.article_id}
        />
        <section className="comments_section">
          <p>Comments</p>
          <p>{article.comment_count} Comments</p>
          <ArticleComments article_id={article.article_id} user={user} />
        </section>
      </main>
    );
  }
  fetchArticleById = () => {
    api.getArticleById(this.props.article_id).then((article) => {
      this.setState({ article: article, isLoading: false });
    });
  };
}

export default ArticleIndividual;
