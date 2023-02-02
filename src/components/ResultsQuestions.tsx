import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { RiArrowLeftSLine } from "react-icons/ri";
import "../styles/ResultsQuestions.css";

export const ResultsQuestions = () => {
  const navigate = useNavigate();

  const { 
    setStart,
    general, 
    sport, 
    animals, 
    cities, 
    html, 
    js, 
    css } = React.useContext(AppContext);

    const returnQuizz = () => {
      setStart(false)
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
        <p>Result: {general} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Sport</h2>
        <p>Result: {sport} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Animals</h2>
        <p>Result: {animals} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Cities</h2>
        <p>Result: {cities} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>HTML</h2>
        <p>Result: {html} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Javascript</h2>
        <p>Result: {js} / 15</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>CSS</h2>
        <p>Result: {css} / 15</p>
      </div>
    </div>
  );
};
