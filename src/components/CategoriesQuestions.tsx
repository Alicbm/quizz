import React from "react";
import { generalCulture } from "../questions/generalCulture";
import { sport } from "../questions/sport";
import { animals } from "../questions/animals";
import { cities } from "../questions/cities";
import { javascript } from "../questions/javascript";
import { html } from "../questions/html";
import { css } from "../questions/css";
import { GeneralCulture } from "../types";
import { AppContext } from "./AppContext";

export function CategoriesQuestions () {

  const 
    { 
      position, setCategorySelected 
    }: any = React.useContext(AppContext);

  const chooseCategory = (category: GeneralCulture[]) => {
    if(position > 0){
      alert('For choose another category you must finish this');
    }else{
      setCategorySelected(category)
    }
  }

  return(
    <div>
      <ul>
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