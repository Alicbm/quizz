import React from "react";
import { AppContext } from "./AppContext";
import { generalCulture } from "../questions/generalCulture";
import { sport } from "../questions/sport";
import { animals } from "../questions/animals";
import { cities } from "../questions/cities";
import { javascript } from "../questions/javascript";
import { html } from "../questions/html";
import { css } from "../questions/css";
import { GeneralCulture } from "../types";
import '../styles/CategoryQuestions.css';

export function CategoriesQuestions () {

  const { position, setCategorySelected } = React.useContext(AppContext);
  // const { position, setCategorySelected } = useState();

  const chooseCategory = (category: GeneralCulture[]) => {
    position > 0 ?
    alert('For choose another category you must finish this')
    : setCategorySelected(category)
  }

  return(
    <div className="CategoriesQuestions unshow">
      <ul className="CategoriesQuestions-list">
        <li onClick={() => chooseCategory(generalCulture)}>General Culture</li>
        <li onClick={() => chooseCategory(sport)}>Sports</li>
        <li onClick={() => chooseCategory(animals)}>Animals</li>
        <li onClick={() => chooseCategory(cities)}>Cities</li>
        <li onClick={() => chooseCategory(javascript)}>Javascript</li>
        <li onClick={() => chooseCategory(html)}>Html</li>
        <li onClick={() => chooseCategory(css)}>Css</li>
      </ul>
    </div>
  )
}