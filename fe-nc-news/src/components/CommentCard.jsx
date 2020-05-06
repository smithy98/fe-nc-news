import React, { Component } from "react";
import Votes from "./Votes";
import * as api from "../utils/api";

class CommentCard extends Component {
  state = {
    deleting: false,
  };

  render() {
    const { deleting } = this.state;
    const {
      comment: { author, body, votes, comment_id },
      user,
    } = this.props;
    return (
      <section className="comment_card">
        <p>
          {author}: {body}
        </p>
        <Votes votes={votes} subject="comments" id={comment_id} />
        {author === user ? (
          deleting ? (
            <p>Deleting your comment...</p>
          ) : (
            <button onClick={this.handleCommentDelete} comment_id={comment_id}>
              Delete Post
            </button>
          )
        ) : null}
      </section>
    );
  }

  handleCommentDelete = (event) => {
    event.preventDefault();
    const comment_id = event.target.attributes.comment_id.value;
    this.setState((currentState) => {
      return {
        deleting: !currentState.deleting,
      };
    });

    api.deleteCommentById(comment_id).then(() => {
      this.props.toggleDeletingComment();
      this.setState((currentState) => {
        return {
          deleting: !currentState.deleting,
        };
      });
    });
  };
}

export default CommentCard;
