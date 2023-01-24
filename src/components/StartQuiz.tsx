import React from "react";
import { AppContext } from "./AppContext";
import "../styles/StartQuiz.css";

export const StartQuiz = () => {
  const { nameCategory, setStart } = React.useContext(AppContext);

  return (
    <div className="StartQuiz">
      <div className="StartQuiz-container">
        <h2 className="StartQuiz-container__title">Are you ready?</h2>
        <p className="StartQuiz-container__text">
          You are in the "{nameCategory}" category, if you are ready to start the
          quizz, press the button. You can change this category.
        </p>
        <button className="StartQuiz-container__button" onClick={() => setStart(true)}>
          Start
        </button>
      </div>
    </div>
  );
};
