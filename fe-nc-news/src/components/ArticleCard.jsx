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
      <section className="article_card">
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <p>Posted: {created_at}</p>
        <p>Comment Count: {comment_count}</p>
        <p>Votes: {votes}</p>
      </section>
    </Link>
  );
};

export default ArticleCard;
