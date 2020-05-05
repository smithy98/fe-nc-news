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
  };

  updateUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Router>
          <HomeMain path="/" />
          <TopicMain path="/topics" />
          <UserMain path="/users" />
          <ArticleMain path="/articles" />
          <ArticleIndividual path="/articles/:article_id" user={user} />
          <ErrorDisplayer default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
