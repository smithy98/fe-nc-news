import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    body: "",
  };

  render() {
    const { user } = this.props;
    return (
      <section id="comment_adder">
        <p>Post a comment as {user}</p>
        <form
          id="comment_submit_form"
          onChange={this.handleComment}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="comment_input"
            placeholder="Let the author know what you think. Write your comment here..."
            required
          ></input>
          <button>Submit Comment</button>
        </form>
      </section>
    );
  }

  addCommentToArticleId = () => {
    const { body } = this.state;
    const { article_id, user } = this.props;

    this.props.toggleCommentPosting();

    api.postCommentToArticleId(article_id, user, body).then(() => {
      this.props.toggleCommentPosting();
    });
  };

  handleComment = (event) => {
    const { value } = event.target;
    this.setState({
      body: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addCommentToArticleId();
  };
}

export default CommentAdder;
