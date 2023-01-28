import React from "react";
import { AppContext } from "./AppContext";

import { generalCulture as categoryGeneral} from "../questions/generalCulture";
import { sport as categorySport} from "../questions/sport";
import { animals as categoryAnimals} from "../questions/animals";
import { cities as categoryCities} from "../questions/cities";
import { javascript as categoryJs} from "../questions/javascript";
import { html as categoryHtml} from "../questions/html";
import { css as categoryCss} from "../questions/css";

import "../styles/ResultsQuestions.css";

export const ResultsQuestions = () => {
  const { general, sport, animals, cities, html, js, css } =
    React.useContext(AppContext);

  return (
    <div className="ResultsQuestions">
      <h1 className="ResultsQuestions-title">
        Congratulations!! Here you can find all the results of every quiz
      </h1>
      <div className="ResultsQuestions-card">
        <h2>General Culture</h2>
        <p>Result: {general} / {categoryGeneral.length}</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Sport</h2>
        <p>Result: {sport} / {categorySport.length}</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Animals</h2>
        <p>Result: {animals} / {categoryAnimals.length }</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Cities</h2>
        <p>Result: {cities} / {categoryCities.length}</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>HTML</h2>
        <p>Result: {html} / {categoryHtml.length}</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>Javascript</h2>
        <p>Result: {js} / {categoryJs.length}</p>
      </div>
      <div className="ResultsQuestions-card">
        <h2>CSS</h2>
        <p>Result: {css} / {categoryCss.length}</p>
      </div>
    </div>
  );
};
