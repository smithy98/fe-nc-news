import React, { Component } from "react";
import * as api from "../utils/api";
import Votes from "./Votes";
import Loading from "./Loading";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <section className="comment_card">
        {comments.map((comment) => {
          return (
            <section className="comment_card" key={comment.comment_id}>
              <p>
                {comment.author}: {comment.body}
              </p>
              <Votes
                votes={comment.votes}
                subject="comments"
                id={comment.comment_id}
              />
            </section>
          );
        })}
      </section>
    );
  }

  fetchCommentsByArticleId = () => {
    api.getCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({
        comments: comments,
        isLoading: false,
      });
    });
  };
}

export default ArticleComments;
