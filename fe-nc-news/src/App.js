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

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <HomeMain path="/" />
        <TopicMain path="/topics" />
        <UserMain path="/users" />
        <ArticleMain path="/articles" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
