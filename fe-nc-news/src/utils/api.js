import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://nc-news-backend-dan.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getUsers = () => {
  return axios
    .get("https://nc-news-backend-dan.herokuapp.com/api/users")
    .then(({ data: { users } }) => {
      return users;
    });
};

export const getArticles = ({ topic }) => {
  return axios
    .get("https://nc-news-backend-dan.herokuapp.com/api/articles", {
      params: {
        topic: topic,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-backend-dan.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchVotes = (subject, article_id, votes) => {
  return axios.patch(
    `https://nc-news-backend-dan.herokuapp.com/api/${subject}/${article_id}`,
    {
      inc_votes: votes,
    }
  );
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://nc-news-backend-dan.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};
