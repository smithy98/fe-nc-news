import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";
import TopicMain from "./components/TopicMain";
import UserMain from "./components/UserMain";
import ArticleMain from "./components/ArticleMain";
import ArticleIndividual from "./components/ArticleIndividual";
import ErrorDisplayer from "./components/ErrorDisplayer";

class App extends React.Component {
  state = {
    user: "tickle122",
    topic: undefined,
  };

  render() {
    const { user, topic } = this.state;
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <HomeMain path="/" />
          <TopicMain path="/topics" updateTopic={this.updateTopic} />
          <UserMain path="/users" updateUser={this.updateUser} />
          <ArticleMain
            path="/articles"
            topic={topic}
            updateTopic={this.updateTopic}
          />
          <ArticleIndividual path="/articles/:article_id" user={user} />
          <ErrorDisplayer default />
        </Router>
        <Footer />
      </div>
    );
  }

  updateUser = (user) => {
    this.setState({
      user,
    });
  };

  updateTopic = (topic) => {
    console.log("updateTopic", topic);
    this.setState({
      topic,
    });
  };
}

export default App;
