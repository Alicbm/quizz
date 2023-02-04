import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { RiArrowLeftSLine } from "react-icons/ri";
import "../styles/ResultsQuestions.css";

export const ResultsQuestions = () => {
  const navigate = useNavigate();

  const { dispatch, state } = React.useContext(AppContext);

    const returnQuizz = () => {
      dispatch({ type: 'start', payload: false })
      // setStart(false)
      navigate('/quiz')
    }

  return (
    <div className="ResultsQuestions">
      <span className="arrow" onClick={returnQuizz}>
        <RiArrowLeftSLine />
      </span>
      <h1 className="ResultsQuestions-title">
        Congratulations!! Here you can find all the results of every quiz
      </h1>
      <div className="ResultsQuestions-card">
        <h2>General Culture</h2>
        <p>Result: {state.general} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Sport</h2>
        <p>Result: {state.sport} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Animals</h2>
        <p>Result: {state.animals} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Cities</h2>
        <p>Result: {state.cities} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>HTML</h2>
        <p>Result: {state.html} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Javascript</h2>
        <p>Result: {state.js} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>CSS</h2>
        <p>Result: {state.css} / 15</p>
      </div>
    </div>
  );
};
