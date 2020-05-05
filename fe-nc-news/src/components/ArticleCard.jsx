import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  const {
    article_id,
    title,
    author,
    topic,
    created_at,
    comment_count,
    votes,
  } = props.article;
  return (
    <Link to={`${article_id}`}>
      <div className="list_item">
        Title: {title} <br />
        Author: {author} <br />
        Topic: {topic} <br />
        Posted: {created_at} <br />
        comment count: {comment_count} <br />
        Votes: {votes}
      </div>
    </Link>
  );
};

export default ArticleCard;
