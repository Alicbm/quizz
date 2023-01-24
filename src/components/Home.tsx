import React from "react";
import { Header } from "./Header";
import { CardQuestion } from "./CardQuestion";
import { CategoriesQuestions } from "./CategoriesQuestions";
import { Chronometer } from "./Chronometer";
import "../styles/Home.css";
import { AppContext } from "./AppContext";
import { StartQuiz } from "./StartQuiz";

export const Home = () => {
  const { start } = React.useContext(AppContext);

  return (
    <div className="Home">
      <Header />
      <div className="Home-main">
        <CategoriesQuestions />
        {!start ? (
          <StartQuiz />
        ) : (
          <div className="Home-question">
            <Chronometer />
            <CardQuestion />
            <p className="Home-created">Created by Alic Barandica 🖐🏾.</p>
          </div>
        )}
      </div>
    </div>
  );
};
