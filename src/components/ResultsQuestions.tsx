import React from "react";
import { AppContext } from "./AppContext";
import "../styles/ResultsQuestions.css";

export const ResultsQuestions = () => {
  const { 
    general, 
    sport, 
    animals, 
    cities, 
    html, 
    js, 
    css, 
  } = React.useContext(AppContext);

  return (
    <div className="ResultsQuestions">
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
