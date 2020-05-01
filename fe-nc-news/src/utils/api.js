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
