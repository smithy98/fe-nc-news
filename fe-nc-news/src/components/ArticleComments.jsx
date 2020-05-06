import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    commentPosting: false,
    deletingComment: false,
  };

  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.commentPosting !== this.state.commentPosting) {
      this.fetchCommentsByArticleId();
    } else if (this.state.deletingComment) {
      this.fetchCommentsByArticleId();
      this.toggleDeletingComment();
    }
  }

  render() {
    const { comments, isLoading, commentPosting } = this.state;
    const { user, article_id } = this.props;
    if (isLoading) return <Loading />;
    return (
      <section className="comment_section">
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              user={user}
              key={comment.comment_id}
              toggleDeletingComment={this.toggleDeletingComment}
            />
          );
        })}
        {commentPosting ? <p>Your comment is being posted</p> : null}
        <CommentAdder
          user={user}
          article_id={article_id}
          toggleCommentPosting={this.toggleCommentPosting}
        />
      </section>
    );
  }

  toggleCommentPosting = () => {
    this.setState((currentState) => {
      return {
        commentPosting: !currentState.commentPosting,
      };
    });
  };

  toggleDeletingComment = () => {
    this.setState((currentState) => {
      return {
        deletingComment: !currentState.deletingComment,
      };
    });
  };

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
