import React, { Component } from "react";
import * as api from "../utils/api";
import Votes from "./Votes";
import Loading from "./Loading";
import CommentAdder from "./CommentAdder";

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
    commentPosting: false,
  };

  componentDidMount() {
    this.fetchCommentsByArticleId();
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.commentPosting !== this.state.commentPosting) {
      this.fetchCommentsByArticleId();
    }
  }

  render() {
    const { comments, isLoading, commentPosting } = this.state;
    const { user, article_id } = this.props;
    console.log("rendering comments");
    if (isLoading) return <Loading />;
    return (
      <section className="comment_section">
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

  // editComments = (action, username, body) => {
  //   this.setState((currentState) => {
  //     if (action === "add") {
  //       console.log(currentState.comments);
  //       return {
  //         comments: currentState.comments.push({
  //           author: username,
  //           body: body,
  //           votes: 0,
  //         }),
  //       };
  //     } else if (action === "delete") {
  //       console.log(currentState);
  //       return {
  //         comments: currentState.comments.pop(),
  //       };
  //     }
  //   });
  // };

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
